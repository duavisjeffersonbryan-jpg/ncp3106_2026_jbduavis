/* Small, progressive visual enhancements. No animation is needed to read the page. */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const motionQuery = matchMedia('(prefers-reduced-motion: reduce)');
  let manuallyPaused = false;
  try { manuallyPaused = localStorage.getItem('cpe-motion') === 'paused'; } catch { /* Optional preference. */ }
  const motionControl = document.querySelector('.motion-control');
  const motionAllowed = () => !motionQuery.matches && !manuallyPaused;

  function syncMotion() {
    const paused = !motionAllowed();
    root.dataset.motion = paused ? 'paused' : 'running';
    if (motionControl) {
      motionControl.setAttribute('aria-pressed', String(paused));
      motionControl.innerHTML = paused ? '<span aria-hidden="true">▷</span> Effects paused' : '<span aria-hidden="true">Ⅱ</span> Pause effects';
      motionControl.disabled = motionQuery.matches;
      motionControl.title = motionQuery.matches ? 'Reduced motion is enabled in your device settings' : 'Pause or resume decorative animation';
    }
    document.dispatchEvent(new Event('cpe:motionchange'));
  }
  motionControl?.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    try { localStorage.setItem('cpe-motion', manuallyPaused ? 'paused' : 'running'); } catch { /* Works for this visit. */ }
    syncMotion();
  });
  motionQuery.addEventListener('change', syncMotion);
  syncMotion();

  // Bootstrap remains the primary controller; these fallbacks keep navigation usable offline.
  if (!window.bootstrap) {
    const toggle = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#mainNav');
    toggle?.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(expanded));
      menu?.classList.toggle('show', expanded);
      document.querySelector('.navbar')?.classList.toggle('show-menu', expanded);
    });
    document.querySelectorAll('.dropdown-toggle').forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault();
        const expanded = button.getAttribute('aria-expanded') !== 'true';
        button.setAttribute('aria-expanded', String(expanded));
        button.nextElementSibling?.classList.toggle('show', expanded);
      });
    });
  }

  if (matchMedia('(pointer: fine)').matches) {
    const scene = document.querySelector('.core-scene');
    const hero = document.querySelector('.cpe-hero');
    hero?.addEventListener('pointermove', event => {
      if (!motionAllowed() || !scene) return;
      const bounds = hero.getBoundingClientRect();
      scene.style.setProperty('--scene-x', `${(event.clientX / bounds.width - .5) * 14}px`);
      scene.style.setProperty('--scene-y', `${((event.clientY - bounds.top) / bounds.height - .5) * 10}px`);
    }, { passive: true });
    hero?.addEventListener('pointerleave', () => {
      scene?.style.setProperty('--scene-x', '0px');
      scene?.style.setProperty('--scene-y', '0px');
    });
    document.querySelectorAll('.spotlight-card').forEach(card => {
      card.addEventListener('pointermove', event => {
        if (!motionAllowed()) return;
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
        card.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
      }, { passive: true });
    });
  }

  // Low-density ambient particles; one RAF loop, capped DPR, paused offscreen/hidden.
  const canvas = document.querySelector('#ambient-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;
  let width = 0;
  let height = 0;
  let frame = 0;
  let lastTime = 0;
  let inView = true;
  let particles = [];
  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: width < 768 ? 18 : 38 }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      speed: 3 + Math.random() * 8, size: Math.random() > .85 ? 1.2 : .6,
      opacity: .13 + Math.random() * .3
    }));
  }
  function draw(time) {
    const dt = Math.min((time - lastTime) / 1000 || 0, .05);
    lastTime = time;
    context.clearRect(0, 0, width, height);
    for (const particle of particles) {
      particle.y -= particle.speed * dt;
      if (particle.y < 0) particle.y = height;
      context.fillStyle = `rgba(219,158,104,${particle.opacity})`;
      context.fillRect(particle.x, particle.y, particle.size, particle.size);
    }
    frame = requestAnimationFrame(draw);
  }
  function updateLoop() {
    cancelAnimationFrame(frame);
    frame = 0;
    if (motionAllowed() && inView && !document.hidden) {
      lastTime = 0;
      frame = requestAnimationFrame(draw);
    } else context.clearRect(0, 0, width, height);
  }
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(canvas);
  else addEventListener('resize', resize, { passive: true });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      updateLoop();
    }).observe(canvas);
  }
  document.addEventListener('visibilitychange', updateLoop);
  document.addEventListener('cpe:motionchange', updateLoop);
  resize();
  updateLoop();
});

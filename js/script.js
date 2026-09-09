document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.navbar');
  const progress = document.querySelector('.progress-line');
  const backTop = document.querySelector('.back-top');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Persistent light/dark theme control. The initial theme is set in the head to avoid a flash. */
  const navContainer = nav?.querySelector('.container');
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.type = 'button';
  themeToggle.innerHTML = `
    <svg class="sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
    <svg class="moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.1A8.5 8.5 0 0 1 8.9 4a8.5 8.5 0 1 0 11.1 11.1Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;
  const updateThemeControl = () => {
    const isDark = document.documentElement.dataset.theme === 'dark';
    themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    themeToggle.title = `Switch to ${isDark ? 'light' : 'dark'} mode`;
  };
  const setTheme = theme => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem('cpe-theme', theme); } catch { /* Theme still works without storage. */ }
    updateThemeControl();
  };
  if (navContainer) {
    navContainer.append(themeToggle);
    updateThemeControl();
    themeToggle.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      if (!reduceMotion && document.startViewTransition) document.startViewTransition(() => setTheme(nextTheme));
      else setTheme(nextTheme);
    });
  }

  /* Give every inner-page hero a visual page signature. */
  const pageNames = {
    about: '01 / Foundation', ue: '02 / Program', specializations: '03 / Fields',
    careers: '04 / Futures', faculty: '05 / Faculty', scpes: '06 / Community',
    projects: '07 / Projects', contact: '08 / Connect'
  };
  const pageHero = document.querySelector('.page-hero');
  const pageName = pageNames[document.body.dataset.page];
  if (pageHero && pageName) {
    const signature = document.createElement('div');
    signature.className = 'page-signature';
    signature.textContent = pageName;
    pageHero.append(signature);
  }

  const onScroll = () => {
    const y = scrollY;
    const available = document.documentElement.scrollHeight - innerHeight;
    nav?.classList.toggle('scrolled', y > 28);
    if (progress) progress.style.width = `${available > 0 ? (y / available) * 100 : 0}%`;
    backTop?.classList.toggle('visible', y > 520);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTop?.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  const navCollapse = document.querySelector('.navbar-collapse');
  navCollapse?.addEventListener('show.bs.collapse', () => nav?.classList.add('show-menu'));
  navCollapse?.addEventListener('hidden.bs.collapse', () => nav?.classList.remove('show-menu'));
  navCollapse?.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      if (innerWidth < 992 && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
    const selector = link.getAttribute('href');
    if (!selector || selector === '#') return;
    const target = document.querySelector(selector);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    if (link.classList.contains('skip-link')) target.focus({ preventScroll: true });
  }));

  const revealItems = document.querySelectorAll('.reveal');
  const linkedTabs = document.querySelector('[data-tab-deeplinks]');
  if (linkedTabs && window.bootstrap?.Tab) {
    const showLinkedTab = () => {
      const trigger = [...linkedTabs.querySelectorAll('[data-bs-toggle="tab"]')]
        .find(button => button.dataset.bsTarget === location.hash);
      if (!trigger) return;
      bootstrap.Tab.getOrCreateInstance(trigger).show();
      linkedTabs.scrollIntoView({ block: 'start' });
    };
    showLinkedTab();
    addEventListener('hashchange', showLinkedTab);
  }

  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .1, rootMargin: '0px 0px -35px' });
    revealItems.forEach((item, index) => {
      item.classList.add('reveal-ready');
      item.style.setProperty('--i', index % 5);
      observer.observe(item);
    });
  } else revealItems.forEach(item => item.classList.add('visible'));

  const currentFile = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar a[href]').forEach(link => {
    const linkFile = link.getAttribute('href')?.split('#')[0];
    if (linkFile === currentFile && !link.getAttribute('href').includes('#')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
      link.closest('.dropdown')?.querySelector('.dropdown-toggle')?.classList.add('active');
    }
  });

  const hero = document.querySelector('.hero');
  const processor = document.querySelector('.processor');
  if (hero && !reduceMotion && matchMedia('(pointer: fine)').matches) {
    hero.addEventListener('pointermove', event => {
      if (document.documentElement.dataset.motion === 'paused') return;
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      hero.style.setProperty('--pointer-x', `${x}%`);
      hero.style.setProperty('--pointer-y', `${y}%`);
      processor?.style.setProperty('--ry', `${(x - 50) * .08}deg`);
      processor?.style.setProperty('--rx', `${(50 - y) * .08}deg`);
    });
    hero.addEventListener('pointerleave', () => {
      processor?.style.setProperty('--ry', '0deg');
      processor?.style.setProperty('--rx', '0deg');
    });
  }

  if (pageHero && !reduceMotion && matchMedia('(pointer: fine)').matches) {
    pageHero.addEventListener('pointermove', event => {
      if (document.documentElement.dataset.motion === 'paused') return;
      const bounds = pageHero.getBoundingClientRect();
      pageHero.style.setProperty('--page-x', `${((event.clientX - bounds.left) / bounds.width) * 100}%`);
      pageHero.style.setProperty('--page-y', `${((event.clientY - bounds.top) / bounds.height) * 100}%`);
    });
  }

  /* Numbered sections and a compact desktop section navigator. */
  const sections = [...document.querySelectorAll('main > section')];
  sections.forEach((section, index) => {
    if (section.classList.contains('section-space')) section.dataset.sectionIndex = String(index).padStart(2, '0');
  });
  if (sections.length > 1) {
    const rail = document.createElement('nav');
    rail.className = 'section-rail';
    rail.setAttribute('aria-label', 'Page sections');
    sections.forEach((section, index) => {
      if (!section.id) section.id = `section-${index + 1}`;
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.setAttribute('aria-label', `Go to section ${index + 1}`);
      dot.addEventListener('click', () => section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' }));
      rail.append(dot);
    });
    document.body.append(rail);
    const dots = [...rail.children];
    if ('IntersectionObserver' in window) {
      const sectionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          dots.forEach(dot => dot.classList.remove('active'));
          dots[sections.indexOf(entry.target)]?.classList.add('active');
        }
      }), { rootMargin: '-38% 0px -48% 0px' });
      sections.forEach(section => sectionObserver.observe(section));
    }
    dots[0]?.classList.add('active');
  }

  if (!reduceMotion && matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('pointermove', event => {
        if (document.documentElement.dataset.motion === 'paused') return;
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        card.style.setProperty('--tilt-y', `${x * 3.5}deg`);
        card.style.setProperty('--tilt-x', `${y * -3.5}deg`);
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-y', '0deg');
        card.style.setProperty('--tilt-x', '0deg');
      });
    });
  }

  const search = document.querySelector('[data-search]');
  const interestButtons = document.querySelectorAll('button[data-interest]');
  const careerItems = document.querySelectorAll('.career-item');
  let careerCategory = 'all';
  let careerInterest = 'all';
  const emptyCareers = document.createElement('p');
  emptyCareers.className = 'text-muted py-4';
  emptyCareers.setAttribute('role', 'status');
  if (careerItems.length) careerItems[0].parentElement.after(emptyCareers);
  const updateCareers = () => {
    const term = search?.value.trim().toLowerCase() || '';
    let count = 0;
    careerItems.forEach(item => {
      const matches = (!term || item.textContent.toLowerCase().includes(term))
        && (careerCategory === 'all' || item.dataset.category.split(' ').includes(careerCategory))
        && (careerInterest === 'all' || item.dataset.interest.split(' ').includes(careerInterest));
      item.classList.toggle('d-none', !matches);
      if (matches) count++;
    });
    emptyCareers.textContent = count ? '' : 'No careers match these choices. Try another category, interest, or search term.';
  };
  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const buttons = group.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll(`[data-filter-target="${group.dataset.filterGroup}"]`);
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.classList.contains('active')));
      button.addEventListener('click', () => {
      buttons.forEach(item => {
        item.classList.remove('active');
        item.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      const filter = button.dataset.filter;
      if (group.dataset.filterGroup === 'career') {
        careerCategory = filter;
        updateCareers();
      } else items.forEach(item => item.classList.toggle('d-none', filter !== 'all' && !item.dataset.category?.split(' ').includes(filter)));
      });
    });
  });

  search?.addEventListener('input', updateCareers);

  interestButtons.forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
    interestButtons.forEach(item => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    careerInterest = button.dataset.interest;
    updateCareers();
    });
  });

  document.querySelectorAll('[data-diagram]').forEach(node => {
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'button');
    const selectNode = () => {
      document.querySelectorAll('[data-diagram]').forEach(item => item.classList.remove('selected'));
      node.classList.add('selected');
      const detail = document.querySelector('[data-diagram-detail]');
      if (detail) detail.textContent = node.dataset.diagram;
    };
    node.addEventListener('click', selectNode);
    node.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectNode();
      }
    });
  });

  const form = document.querySelector('#contactForm');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      form.querySelector(':invalid')?.focus();
      return;
    }
    const message = document.querySelector('#formMessage');
    if (message) message.textContent = 'Thanks. This demonstration form is ready for connection to an official contact workflow.';
    form.reset();
    form.classList.remove('was-validated');
  });

  document.querySelectorAll('[data-modal-title]').forEach(button => button.addEventListener('click', () => {
    const title = document.querySelector('#infoModalLabel');
    const body = document.querySelector('#modalContent');
    if (title) title.textContent = button.dataset.modalTitle;
    if (body) body.textContent = button.dataset.modalText || 'Additional information can be added here as the program content is verified.';
  }));
});

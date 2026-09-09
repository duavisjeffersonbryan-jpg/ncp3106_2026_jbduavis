/* CpE Play Lab: three self-contained learning games, no account or server required. */
document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('#game-dialog');
  if (!dialog) return;

  const questions = [
    { category: 'COMPUTER HARDWARE', question: 'Which component executes a computer’s program instructions?', answer: 'CPU', options: ['CPU', 'Power supply', 'Monitor', 'Keyboard'], explanation: 'The central processing unit (CPU) fetches, decodes, and executes instructions. It coordinates the work of the computer.' },
    { category: 'MEMORY', question: 'Which type of memory normally loses its contents when power is removed?', answer: 'RAM', options: ['RAM', 'SSD', 'ROM', 'Flash storage'], explanation: 'Ordinary RAM is volatile working memory. SSDs, ROM, and flash storage retain data without continuous power.' },
    { category: 'DIGITAL FUNDAMENTALS', question: 'How many bits make up one byte?', answer: '8 bits', options: ['4 bits', '8 bits', '16 bits', '32 bits'], explanation: 'A byte contains 8 bits. With two possible states per bit, a byte can represent 2⁸ = 256 distinct values.' },
    { category: 'EMBEDDED SYSTEMS', question: 'What best describes an embedded system?', answer: 'A computer designed for a specific function inside a larger device', options: ['A computer designed for a specific function inside a larger device', 'Any computer connected to the internet', 'A website hosted in the cloud', 'A large general-purpose desktop'], explanation: 'Embedded systems perform dedicated functions within products, such as controlling a washing machine or reading a car’s sensors.' },
    { category: 'DIGITAL LOGIC', question: 'Which gate outputs 1 only when both of its inputs are 1?', answer: 'AND', options: ['OR', 'XOR', 'AND', 'NOR'], explanation: 'An AND gate needs every input to be 1 to produce 1. If either input is 0, its output is 0.' },
    { category: 'PROGRAMMING', question: 'What is an algorithm?', answer: 'A finite sequence of steps for solving a problem', options: ['A finite sequence of steps for solving a problem', 'A physical circuit connector', 'A type of computer screen', 'A unit of memory capacity'], explanation: 'An algorithm is a defined sequence of steps that solves a problem. It can be expressed in plain language, a flowchart, or code.' },
    { category: 'INTERNET OF THINGS', question: 'In an IoT weather station, what measures the physical temperature?', answer: 'A sensor', options: ['A router', 'A sensor', 'A compiler', 'A database index'], explanation: 'A sensor converts a physical quantity, such as temperature, into a signal a computing system can process.' },
    { category: 'NETWORKS', question: 'What is a router’s main job?', answer: 'Forward packets between networks', options: ['Compile source code', 'Store a CPU’s instructions', 'Forward packets between networks', 'Convert AC power into DC power'], explanation: 'A router forwards packets between networks using network addresses and routing information.' },
    { category: 'COMPUTER ARCHITECTURE', question: 'What does the ALU inside a processor do?', answer: 'Arithmetic and logical operations', options: ['Arithmetic and logical operations', 'Wireless communication only', 'Long-term file storage', 'Screen color calibration'], explanation: 'The arithmetic logic unit performs operations such as addition, subtraction, comparisons, and bitwise logic.' },
    { category: 'MICROCONTROLLERS', question: 'What typically distinguishes a microcontroller from a standalone CPU?', answer: 'It integrates a CPU, memory, and peripherals on one chip', options: ['It never runs software', 'It integrates a CPU, memory, and peripherals on one chip', 'It must connect to Wi-Fi', 'It can only process audio'], explanation: 'A microcontroller integrates processing, memory, and peripherals such as timers and I/O, making it useful for embedded control.' },
    { category: 'NUMBER SYSTEMS', question: 'What decimal value does the binary number 1010 represent?', answer: '10', options: ['8', '10', '12', '14'], explanation: 'The place values are 8, 4, 2, and 1. Binary 1010 means 8 + 0 + 2 + 0 = 10.' },
    { category: 'OPERATING SYSTEMS', question: 'Which task is a core responsibility of an operating system?', answer: 'Managing processes, memory, and hardware resources', options: ['Manufacturing processors', 'Managing processes, memory, and hardware resources', 'Replacing all application software', 'Increasing the physical size of RAM'], explanation: 'An operating system manages resources and provides services that applications use to interact with hardware.' },
    { category: 'ROBOTICS', question: 'Which component turns a control signal into physical movement?', answer: 'An actuator', options: ['A temperature sensor', 'An actuator', 'A text editor', 'A network address'], explanation: 'Actuators produce physical action. Motors, for example, convert electrical energy into rotation to move a robot.' },
    { category: 'SIGNAL CONVERSION', question: 'What does an ADC do?', answer: 'Converts an analog signal into a digital representation', options: ['Converts an analog signal into a digital representation', 'Encrypts a hard drive', 'Connects two websites', 'Compiles a programming language'], explanation: 'An analog-to-digital converter samples and quantizes an analog signal so a digital system can process it.' },
    { category: 'DIGITAL LOGIC', question: 'What makes XOR different from OR for two inputs?', answer: 'XOR outputs 0 when both inputs are 1', options: ['XOR always outputs 1', 'XOR outputs 0 when both inputs are 1', 'XOR has no inputs', 'XOR only works with analog signals'], explanation: 'XOR outputs 1 when its two inputs differ. OR outputs 1 when at least one input is 1, including when both are 1.' },
    { category: 'PROGRAMMING', question: 'What is debugging?', answer: 'Finding and fixing errors in a program', options: ['Deleting all source files', 'Finding and fixing errors in a program', 'Increasing a monitor’s brightness', 'Installing a physical processor'], explanation: 'Debugging involves reproducing a problem, locating its cause, and correcting the program’s behavior.' },
    { category: 'HARDWARE INTERFACES', question: 'What does GPIO stand for?', answer: 'General-Purpose Input/Output', options: ['General-Purpose Input/Output', 'Graphics Processing Internal Operation', 'Global Program Internet Outlet', 'General Power Integrated Oscillator'], explanation: 'GPIO pins can be configured to read digital inputs or drive digital outputs, such as buttons and LEDs.' },
    { category: 'COMPUTER MEMORY', question: 'Why do processors use cache memory?', answer: 'To keep frequently used data closer to the CPU', options: ['To replace every storage device', 'To keep frequently used data closer to the CPU', 'To connect directly to satellites', 'To generate electrical power'], explanation: 'Caches hold copies of useful data and instructions in small, fast memory, reducing many accesses to slower main memory.' },
    { category: 'INTELLIGENT SYSTEMS', question: 'What is supervised machine learning trained with?', answer: 'Examples paired with expected outputs', options: ['Examples paired with expected outputs', 'Only a power source', 'An empty storage drive', 'No data of any kind'], explanation: 'Supervised learning uses labeled examples, such as images paired with class labels, to learn a mapping from inputs to outputs.' },
    { category: 'NUMBER SYSTEMS', question: 'What is the largest unsigned integer an 8-bit value can represent?', answer: '255', options: ['8', '128', '255', '256'], explanation: 'Eight bits encode 256 distinct values. Starting at zero, the unsigned range is 0 through 255.' },
    { category: 'DIGITAL SYSTEMS', question: 'What is a clock signal used for in a synchronous digital circuit?', answer: 'Coordinating when state changes occur', options: ['Measuring the room temperature', 'Coordinating when state changes occur', 'Storing files permanently', 'Generating a network password'], explanation: 'A clock provides timing edges that coordinate updates to state elements such as registers.' },
    { category: 'SOFTWARE TOOLS', question: 'What does a compiler do?', answer: 'Translates source code into another form, often machine code', options: ['Translates source code into another form, often machine code', 'Measures electrical resistance', 'Stores electricity for a CPU', 'Connects sensors to physical pins'], explanation: 'A compiler translates source code into a target representation such as machine code or bytecode.' },
    { category: 'SYSTEM INTEGRATION', question: 'What is feedback in a control system?', answer: 'Using measured output to adjust the system’s behavior', options: ['Using measured output to adjust the system’s behavior', 'Disconnecting every sensor', 'Running a motor at maximum power forever', 'Deleting the control program'], explanation: 'A feedback controller compares measured behavior with a target and adjusts its action, as a thermostat does with temperature.' },
    { category: 'NETWORKS', question: 'What does LAN stand for?', answer: 'Local Area Network', options: ['Local Area Network', 'Logic Arithmetic Node', 'Large Analog Number', 'Linked Application Name'], explanation: 'A local area network connects devices within a limited area, such as a home, laboratory, or office.' }
  ];

  const modes = {
    quest: { title: 'Knowledge Quest', rounds: 8, label: 'QUEST' },
    binary: { title: 'Binary Builder', rounds: 6, label: 'BINARY' },
    logic: { title: 'Logic Lab', rounds: 6, label: 'LOGIC' }
  };
  const gates = {
    AND: { evaluate: (a,b) => a & b, explanation: 'AND outputs 1 only when both inputs are 1.' },
    OR: { evaluate: (a,b) => a | b, explanation: 'OR outputs 1 when at least one input is 1.' },
    XOR: { evaluate: (a,b) => a ^ b, explanation: 'XOR outputs 1 when the two inputs are different.' },
    NAND: { evaluate: (a,b) => 1 - (a & b), explanation: 'NAND inverts AND: its output is 0 only when both inputs are 1.' },
    NOR: { evaluate: (a,b) => 1 - (a | b), explanation: 'NOR inverts OR: its output is 1 only when both inputs are 0.' },
    NOT: { evaluate: a => 1 - a, explanation: 'NOT has one input and inverts it: 0 becomes 1, and 1 becomes 0.' }
  };
  const bitWeights = [128,64,32,16,8,4,2,1];
  const storageKey = 'cpe-play-lab-v1';
  const content = document.querySelector('#game-content');
  let selectedMode = 'quest';
  let session = null;
  let returnFocus = document.querySelector('#launch-game');
  let soundEnabled = false;
  let audioContext;
  let best = { quest: 0, binary: 0, logic: 0 };
  let storageAvailable = true;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    for (const mode of Object.keys(best)) {
      const max = mode === 'quest' ? 1350 : 950;
      if (Number.isInteger(saved?.[mode]) && saved[mode] >= 0 && saved[mode] <= max) best[mode] = saved[mode];
    }
  } catch { storageAvailable = false; }

  const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  function shuffled(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function updateBest() {
    document.querySelector('#lab-best').textContent = best[selectedMode];
    const note = document.querySelector('.lab-personal-best small');
    if (note) note.textContent = storageAvailable ? `${modes[selectedMode].title} · this browser` : 'Best for this visit · storage unavailable';
  }
  document.querySelectorAll('[data-mode]').forEach(button => {
    button.addEventListener('click', () => {
      selectedMode = button.dataset.mode;
      document.querySelectorAll('[data-mode]').forEach(item => {
        const active = item === button;
        item.classList.toggle('selected', active);
        item.setAttribute('aria-pressed', String(active));
      });
      document.querySelector('#challenge-meta').innerHTML = `<span>${modes[selectedMode].rounds} ROUNDS</span><span>NO TIME LIMIT</span><span>BEGINNER FRIENDLY</span>`;
      updateBest();
    });
  });
  updateBest();

  // Sound is synthesized locally and starts only after an explicit user choice.
  async function playTone(correct) {
    if (!soundEnabled) return;
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      if (audioContext.state === 'suspended') await audioContext.resume();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(correct ? 520 : 230, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(correct ? 780 : 170, audioContext.currentTime + .15);
      gain.gain.setValueAtTime(.035, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + .22);
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + .23);
    } catch { /* An unavailable audio device never interrupts the game. */ }
  }
  document.querySelector('#sound-toggle').addEventListener('click', event => {
    soundEnabled = !soundEnabled;
    event.currentTarget.setAttribute('aria-pressed', String(soundEnabled));
    event.currentTarget.textContent = soundEnabled ? 'Sound on' : 'Sound off';
    if (soundEnabled) playTone(true);
  });

  function makeRounds(mode) {
    if (mode === 'quest') return shuffled(questions).slice(0,8).map(question => ({ ...question, options: shuffled(question.options) }));
    if (mode === 'logic') return shuffled(Object.keys(gates)).map(gate => {
      const a = Math.round(Math.random());
      const b = gate === 'NOT' ? null : Math.round(Math.random());
      return { gate, a, b, answer: gates[gate].evaluate(a,b) };
    });
    const targets = new Set();
    return Array.from({ length: 6 }, (_, index) => {
      const maximum = index < 2 ? 31 : index < 4 ? 127 : 255;
      let target = Math.floor(Math.random() * (maximum + 1));
      // Bounded collision resolution avoids repeated targets, even with deterministic random values.
      while (targets.has(target)) target = (target + 1) % (maximum + 1);
      targets.add(target);
      return { target, answer: target };
    });
  }
  function startGame() {
    session = { mode: selectedMode, rounds: makeRounds(selectedMode), index: 0, score: 0, streak: 0, maxStreak: 0, correct: 0, answered: false, bits: Array(8).fill(0), review: [], finished: false };
    document.querySelector('#game-mode-label').textContent = `/ ${modes[selectedMode].label}`;
    renderRound();
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('game-open');
    focusTitle();
  }
  function focusTitle() {
    const title = content.querySelector('#game-title');
    title?.focus({ preventScroll: true });
    dialog.scrollTop = 0;
  }
  document.querySelector('#launch-game').addEventListener('click', startGame);
  document.querySelector('#game-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    document.body.classList.remove('game-open');
    session = null;
    returnFocus.focus({ preventScroll: true });
    returnFocus = document.querySelector('#launch-game');
  });

  function statsMarkup() {
    return `<div class="game-stats"><span>ROUND <strong>${String(session.index + 1).padStart(2,'0')}</strong> / ${session.rounds.length}</span><span>STREAK <strong id="current-streak">${session.streak}×</strong></span><span><strong id="current-xp">${session.score}</strong> XP</span></div><div class="game-progress" role="img" aria-label="Round ${session.index + 1} of ${session.rounds.length}">${session.rounds.map((_,i) => `<span class="${i < session.index ? 'done' : i === session.index ? 'current' : ''}"></span>`).join('')}</div>`;
  }
  function answerMarkup(options) {
    return `<div class="answer-grid">${options.map((option,index) => `<button class="answer-button" type="button" data-answer="${index}"><span class="answer-key" aria-hidden="true">${index + 1}</span><span>${escapeHTML(option)}</span></button>`).join('')}</div>`;
  }
  function renderRound() {
    session.answered = false;
    session.bits = Array(8).fill(0);
    const round = session.rounds[session.index];
    let challenge = '';
    if (session.mode === 'quest') {
      challenge = `<div class="question-tag">${round.category}</div><h2 id="game-title" tabindex="-1">${escapeHTML(round.question)}</h2><p class="game-instruction">Choose one answer. Every round comes with a little more understanding.</p>${answerMarkup(round.options)}`;
    } else if (session.mode === 'binary') {
      challenge = `<div class="question-tag">BINARY → DECIMAL</div><h2 id="game-title" tabindex="-1">Build the target. Bit by bit.</h2><p class="game-instruction">Toggle the bits to match the decimal target. Each 1 adds its place value to your total; each 0 adds nothing.</p><div class="binary-target">TARGET <strong>${round.target}</strong><span>DECIMAL</span></div><div class="bit-grid">${bitWeights.map((weight,i) => `<div class="bit-control"><small>${weight}</small><button type="button" class="bit-button" data-bit="${i}" aria-pressed="false" aria-label="${weight} place value, bit ${i+1}">0</button></div>`).join('')}</div><div class="binary-current" aria-live="polite">YOUR VALUE <strong id="binary-value">0</strong></div><button class="action-button game-next" id="check-binary" type="button">Check my bits <span aria-hidden="true">↗</span></button>`;
    } else {
      const isNot = round.gate === 'NOT';
      challenge = `<div class="question-tag">DIGITAL LOGIC / ${round.gate} GATE</div><h2 id="game-title" tabindex="-1">What comes out of this gate?</h2><p class="game-instruction">Follow ${isNot ? 'the input' : 'inputs A and B'} through the ${round.gate} gate. Choose the output: 0 (low) or 1 (high).</p><div class="logic-circuit" role="img" aria-label="${round.gate} gate with input A ${round.a}${isNot ? '' : ` and input B ${round.b}`}, unknown output"><div class="logic-inputs"><span class="logic-input">A = ${round.a}</span>${isNot ? '' : `<span class="logic-input">B = ${round.b}</span>`}</div><div class="logic-wires ${isNot ? 'single-wire' : ''}"></div><div class="logic-gate">${round.gate}</div><div class="logic-output-wire"></div><div class="logic-output">?</div></div>${answerMarkup(['0 — LOW','1 — HIGH'])}`;
    }
    content.innerHTML = `${statsMarkup()}${challenge}<div id="feedback-slot" aria-live="polite"></div><p class="game-bottom-hint">${session.mode === 'binary' ? 'Keys 1–8 toggle bits.' : session.mode === 'quest' ? 'Keys 1–4 select an answer.' : 'Keys 1–2 select an answer.'} No timer. Exit ends this run.</p>`;
    focusTitle();
  }

  function toggleBit(index) {
    if (!session || session.answered || session.mode !== 'binary' || session.finished) return;
    session.bits[index] = 1 - session.bits[index];
    const button = content.querySelector(`[data-bit="${index}"]`);
    button.textContent = session.bits[index];
    button.setAttribute('aria-pressed', String(Boolean(session.bits[index])));
    content.querySelector('#binary-value').textContent = binaryValue();
  }
  const binaryValue = () => session.bits.reduce((sum, bit, i) => sum + bit * bitWeights[i],0);

  function submitAnswer(value) {
    if (!session || session.answered || session.finished) return;
    session.answered = true;
    const round = session.rounds[session.index];
    const correct = value === round.answer;
    let explanation;
    let reviewQuestion;
    if (session.mode === 'quest') {
      explanation = round.explanation;
      reviewQuestion = round.question;
      content.querySelectorAll('[data-answer]').forEach(button => {
        const option = round.options[Number(button.dataset.answer)];
        button.disabled = true;
        if (option === round.answer) {
          button.classList.add('correct');
          button.querySelector('.answer-key').textContent = '✓';
          button.setAttribute('aria-label', `${option}. Correct answer.`);
        } else if (option === value) {
          button.classList.add('incorrect');
          button.querySelector('.answer-key').textContent = '×';
          button.setAttribute('aria-label', `${option}. Your answer, incorrect.`);
        }
      });
    } else if (session.mode === 'binary') {
      const binary = round.target.toString(2).padStart(8,'0');
      const parts = bitWeights.filter(weight => (round.target & weight) !== 0);
      explanation = `${round.target} in 8-bit binary is ${binary}. ${parts.length ? `${parts.join(' + ')} = ${round.target}.` : 'All bits are 0, so the total is 0.'} ${correct ? 'You connected every place value correctly.' : `Your bits represented ${value}.`}`;
      reviewQuestion = `Build decimal ${round.target} in binary.`;
      content.querySelectorAll('[data-bit], #check-binary').forEach(button => { button.disabled = true; });
    } else {
      explanation = `${gates[round.gate].explanation} With A = ${round.a}${round.gate === 'NOT' ? '' : ` and B = ${round.b}`}, the output is ${round.answer}.`;
      reviewQuestion = `${round.gate}: A = ${round.a}${round.gate === 'NOT' ? '' : `, B = ${round.b}`}.`;
      content.querySelector('.logic-output').textContent = round.answer;
      content.querySelectorAll('[data-answer]').forEach(button => {
        button.disabled = true;
        const option = Number(button.dataset.answer);
        if (option === round.answer) {
          button.classList.add('correct');
          button.querySelector('.answer-key').textContent = '✓';
          button.setAttribute('aria-label', `Output ${option}. Correct answer.`);
        } else if (option === value) {
          button.classList.add('incorrect');
          button.querySelector('.answer-key').textContent = '×';
          button.setAttribute('aria-label', `Output ${option}. Your answer, incorrect.`);
        }
      });
    }
    let earned = 0;
    if (correct) {
      session.correct++;
      session.streak++;
      session.maxStreak = Math.max(session.maxStreak,session.streak);
      earned = 100 + Math.min(session.streak - 1,4) * 25;
      session.score += earned;
    } else session.streak = 0;
    session.review.push({ question: reviewQuestion, explanation, correct });
    content.querySelector('#current-xp').textContent = session.score;
    content.querySelector('#current-streak').textContent = `${session.streak}×`;
    const isLast = session.index === session.rounds.length - 1;
    content.querySelector('#feedback-slot').innerHTML = `<div class="game-feedback ${correct ? '' : 'is-wrong'}" tabindex="-1"><strong>${correct ? `✓ Signal confirmed. +${earned} XP${session.streak > 1 ? ` · ${session.streak}× streak` : ''}` : '↳ A good moment to learn.'}</strong><p>${escapeHTML(explanation)}</p></div><button class="action-button game-next" id="next-round" type="button">${isLast ? 'See my results' : 'Next challenge'} <span aria-hidden="true">→</span></button>`;
    content.querySelector('.game-feedback').focus({ preventScroll: true });
    content.querySelector('.game-feedback').scrollIntoView({ block: 'nearest', behavior: 'instant' });
    playTone(correct);
  }

  function showResults() {
    if (!session || session.finished) return;
    session.finished = true;
    const previousBest = best[session.mode];
    const newBest = session.score > previousBest;
    best[session.mode] = Math.max(previousBest, session.score);
    try { localStorage.setItem(storageKey,JSON.stringify(best)); storageAvailable = true; } catch { storageAvailable = false; }
    updateBest();
    const accuracy = Math.round(session.correct / session.rounds.length * 100);
    const rank = accuracy === 100 ? 'SYSTEMS MASTER' : accuracy >= 75 ? 'CIRCUIT ARCHITECT' : accuracy >= 50 ? 'RISING ENGINEER' : 'CURIOUS EXPLORER';
    const headline = accuracy === 100 ? 'A flawless connection.' : accuracy >= 50 ? 'Your next level, unlocked.' : 'Every bit of practice counts.';
    content.innerHTML = `<div class="results-heading"><div class="results-emblem" aria-hidden="true">✳</div><div class="question-tag">${rank} / ${modes[session.mode].title.toUpperCase()}</div><h2 id="game-title" tabindex="-1">${headline}</h2><p>You completed ${session.rounds.length} challenges. Keep that curiosity going.</p></div><div class="results-stats"><div><strong>${session.score}</strong><small>XP EARNED</small></div><div><strong>${session.correct}/${session.rounds.length}</strong><small>CORRECT · ${accuracy}%</small></div><div><strong>${session.maxStreak}×</strong><small>BEST STREAK</small></div></div><p class="best-message">${newBest ? '↗ NEW PERSONAL BEST' : `PERSONAL BEST: ${best[session.mode]} XP`} ${storageAvailable ? '· Saved on this browser' : '· This visit only; storage unavailable'}</p><details class="review-list"><summary>Review your ${session.rounds.length} challenges & explanations</summary>${session.review.map(item => `<div class="review-item"><strong>${item.correct ? '✓' : '↳'} ${escapeHTML(item.question)}</strong><p>${escapeHTML(item.explanation)}</p></div>`).join('')}</details><div class="results-actions"><button class="action-button launch-game" id="play-again" type="button">Play again <span aria-hidden="true">↻</span></button><button class="action-button results-secondary" id="change-mode" type="button">Try another challenge</button></div><p class="game-bottom-hint">100 XP per correct answer. Consecutive answers add 25 XP each, up to +100 XP.</p>`;
    focusTitle();
    if (accuracy >= 75 && document.documentElement.dataset.motion !== 'paused' && !matchMedia('(prefers-reduced-motion: reduce)').matches) celebrate();
  }
  function celebrate() {
    const layer = document.createElement('div');
    layer.className = 'celebration';
    layer.setAttribute('aria-hidden','true');
    for (let i = 0; i < 28; i++) {
      const piece = document.createElement('i');
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.animationDelay = `${Math.random() * .35}s`;
      piece.style.setProperty('--confetti-x',`${Math.random() * 120 - 60}px`);
      piece.style.background = ['#dbb875','#acbb8a','#de9169'][i % 3];
      layer.append(piece);
    }
    dialog.append(layer);
    setTimeout(() => layer.remove(),2400);
  }
  content.addEventListener('click', event => {
    const answer = event.target.closest('[data-answer]');
    const bit = event.target.closest('[data-bit]');
    if (answer && session && !session.answered) {
      const index = Number(answer.dataset.answer);
      submitAnswer(session.mode === 'quest' ? session.rounds[session.index].options[index] : index);
    } else if (bit) toggleBit(Number(bit.dataset.bit));
    else if (event.target.closest('#check-binary')) submitAnswer(binaryValue());
    else if (event.target.closest('#next-round') && session?.answered) {
      if (session.index + 1 === session.rounds.length) showResults();
      else { session.index++; renderRound(); }
    } else if (event.target.closest('#play-again')) startGame();
    else if (event.target.closest('#change-mode')) {
      returnFocus = document.querySelector(`[data-mode="${selectedMode}"]`);
      dialog.close();
    }
  });
  dialog.addEventListener('keydown', event => {
    // Keep Tab cycling inside the challenge, including its results screen.
    if (event.key === 'Tab') {
      const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], summary, [tabindex]:not([tabindex="-1"])')]
        .filter(element => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !focusable.includes(document.activeElement))) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
      return;
    }
    if (!session || session.finished || event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
    if (session.answered) {
      if (event.key === 'Enter' && !event.target.closest('button,summary')) {
        event.preventDefault();
        content.querySelector('#next-round')?.click();
      }
      return;
    }
    if (!/^[1-8]$/.test(event.key)) return;
    const index = Number(event.key) - 1;
    if (session.mode === 'binary') {
      event.preventDefault();
      toggleBit(index);
    } else {
      const button = content.querySelector(`[data-answer="${index}"]`);
      if (button) { event.preventDefault(); button.click(); }
    }
  });
});

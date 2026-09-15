# UE Computer Engineering

A responsive, nine-page academic concept website built with HTML, Bootstrap 5.3.3, CSS, and vanilla JavaScript.

Open **index.html** in a modern browser. No build step, account, backend, or internet connection is required. Bootstrap and the fonts are included locally.

## CpE Play Lab

Choose **Play Lab** in the navigation, select a challenge, and press **Initialize challenge**.

- **Knowledge Quest:** eight randomized questions from a 24-question pool covering hardware, software, embedded systems, networks, robotics, and digital fundamentals.
- **Binary Builder:** six unique decimal targets. Toggle eight bits to build each number, with progressively larger ranges.
- **Logic Lab:** six challenges covering AND, OR, XOR, NAND, NOR, and NOT.

Every answer includes an explanation. Correct answers earn 100 XP; each consecutive correct answer adds another 25 XP, up to a 100 XP bonus. Results include accuracy, the longest streak, and a review of every challenge. Personal bests are saved separately for each mode in this browser. If browser storage is unavailable, games and theme controls continue to work for the visit.

Use keys **1–4** for quiz answers, **1–8** for binary bits, or **1–2** for logic answers. Press **Enter** after feedback to advance, or **Escape** to exit. Exiting discards the unfinished run. Sound is optional and off by default.

## Design and accessibility

The site includes an original SVG processor scene with animated signal paths, pointer parallax, ambient particles, interactive card lighting, scroll reveals, project illustrations, dark and light themes, and a global effects pause preference. It respects device reduced-motion settings and suspends the particle loop when offscreen or in a hidden tab. Main learning content remains visible without JavaScript.

Navigation, footer, typography, and theme are shared across all nine pages. Project and specialization filters hide entire grid cells; career search combines category and interest selections.

## Files

```text
index.html                 Homepage and Play Lab dialog
about-cpe.html             Discipline overview
cpe-ue.html                Illustrative program experience
specializations.html       14 technology areas with filters and details
careers.html               Search and career filters
faculty.html               Faculty placeholders
scpes.html                 Student community
projects.html              Illustrative project gallery
contact.html               Demonstration form and FAQ
css/
  style.css                Existing shared components
  experience.css           Updated design, responsive layouts, game styles
js/
  theme-init.js            Initial theme without a page flash
  script.js                Shared page interactions
  experience.js            Motion, particles, parallax, and hover lighting
  play-lab.js              Question pool, games, scoring, and local bests
assets/
  processor.svg            Original processor illustration
  fonts.css                Local font declarations
  fonts/                   WOFF2 files and font licenses
  vendor/                  Bootstrap CSS, JavaScript, and license
```

## Local checks

Development-only browser checks are in `.preview-tools/`. They use Playwright with the installed Microsoft Edge executable. The preview server binds only to `127.0.0.1:4173`.

```powershell
npm.cmd install --prefix .preview-tools --no-save playwright @axe-core/playwright
node .preview-tools/preview.cjs
# In a second terminal:
node .preview-tools/verify.cjs
node .preview-tools/accessibility.cjs
```

The browser checks cover the nine routes at 320, 390, 768, 1024, and 1440 pixels; links and local assets; menus, filters, tabs, and form validation; complete runs of all three games; scoring and persistence; keyboard interaction; reduced motion; unavailable storage; and content with JavaScript disabled.

This is an academic concept, with illustrative projects and replaceable faculty/program content. It does not assert official UE branding, curriculum, or personnel details. The contact form validates locally and does not send messages.

Bootstrap is distributed under the MIT license. Inter, Space Grotesk, and IBM Plex Mono are distributed under the SIL Open Font License; their notices are included with the assets.

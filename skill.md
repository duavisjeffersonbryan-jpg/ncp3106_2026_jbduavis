You are a senior front-end developer, UI/UX designer, interaction designer, and accessibility-focused web engineer.

Your task is to DESIGN AND BUILD a complete, professional, visually impressive, highly interactive, responsive MULTI-PAGE COMPUTER ENGINEERING WEBSITE for the Bachelor of Science in Computer Engineering program at the University of the East (UE).

This is an academic project, so ALL required technologies, pages, design requirements, Bootstrap requirements, content guidelines, navigation requirements, responsive requirements, and expected outputs described below MUST be followed.

Do not simplify the project into a basic student website.

The result should feel like a professionally designed modern university technology-program website with premium UI/UX, visually rich interactions, immersive sections, advanced but tasteful animations, excellent typography, and a strong Computer Engineering identity.

==========================================================
1. PRIMARY PROJECT OBJECTIVE
==========================================================

Create a professional, informative, responsive, multi-page website that:

- Introduces Computer Engineering (CpE).
- Introduces the Bachelor of Science in Computer Engineering program at the University of the East.
- Provides useful information for:
  - Prospective students
  - Current students
  - Parents
  - Visitors
  - Members of the Computer Engineering community
- Explains what Computer Engineering is.
- Presents Computer Engineering specializations.
- Presents possible CpE career opportunities.
- Introduces faculty members.
- Introduces the Society of Computer Engineering Students (SCPES).
- Showcases student projects, laboratories, research, and activities.
- Demonstrates proper application of web development fundamentals.
- Provides a polished, clean, professional user experience.

The website should look like an actual Computer Engineering program portal, NOT simply an academic requirement converted into HTML.

==========================================================
2. REQUIRED TECHNOLOGIES
==========================================================

MANDATORY:

- HTML5
- CSS3
- Bootstrap 5

USE VANILLA JAVASCRIPT for interaction and animation enhancement.

DO NOT use:

- React
- Vue
- Angular
- Next.js
- Tailwind CSS
- TypeScript
- jQuery
- Node frameworks
- Backend frameworks

This project must demonstrate HTML, CSS, Bootstrap, and vanilla JavaScript fundamentals.

JavaScript must enhance the website but the primary content must remain accessible even if JavaScript fails.

Use Bootstrap appropriately rather than using components merely for the sake of demonstrating them.

==========================================================
3. PROJECT STRUCTURE
==========================================================

Create the following structure:

cpe-website/
│
├── index.html
├── about-cpe.html
├── cpe-ue.html
├── specializations.html
├── careers.html
├── faculty.html
├── scpes.html
├── projects.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── hero/
│   ├── faculty/
│   ├── projects/
│   ├── laboratories/
│   ├── activities/
│   └── branding/
│
└── assets/
    └── icons/

The website must contain AT LEAST SIX interconnected pages.

However, implement all nine pages above so the project feels complete.

All pages must share:

- Same navbar
- Same footer
- Same visual language
- Same spacing system
- Same typography
- Same button styles
- Same animation principles
- Same responsive behavior

==========================================================
4. DESIGN DIRECTION
==========================================================

Create a PREMIUM MODERN ACADEMIC + TECHNOLOGY aesthetic.

The design should combine:

- Modern university website
- Technology startup landing page
- Engineering portfolio
- Research institution website
- Futuristic digital interface

The design must remain PROFESSIONAL.

Do NOT make it look like:

- Gaming website
- Cyberpunk game UI
- Generic Bootstrap demo
- Cheap neon website
- Template-looking school website
- Plain text document converted to HTML

Design characteristics:

- Clean
- Modern
- Professional
- Futuristic
- Sophisticated
- Highly visual
- Technology-oriented
- Spacious
- Strong hierarchy
- Consistent
- Accessible
- Responsive
- Interactive

==========================================================
5. COLOR SYSTEM
==========================================================

Build the design around a University of the East inspired red identity.

Use:

Primary:
UE-inspired deep red / crimson.

Dark:
#0A0D14 or similarly refined near-black.

Dark secondary:
#111827

Light background:
#FFFFFF

Soft background:
#F6F7F9

Muted:
#667085

Borders:
#E5E7EB

Accent gradients can combine:

- Crimson red
- Deep red
- Soft orange-red
- Subtle violet/blue technology highlights ONLY when appropriate

IMPORTANT:

Do not claim an exact official UE color value unless it has been verified from an official branding source.

Use red strategically for:

- CTAs
- Active states
- Highlights
- Decorative graphics
- Icons
- Focus indicators

Do not make every section red.

Create CSS variables under :root.

Example:

:root {
    --primary: ...;
    --primary-dark: ...;
    --dark: ...;
    --text: ...;
    --muted: ...;
    --surface: ...;
    --border: ...;

    --radius-sm: 8px;
    --radius-md: 16px;
    --radius-lg: 24px;
    --radius-xl: 32px;

    --section-space: 100px;
}

==========================================================
6. TYPOGRAPHY
==========================================================

Use a professional contemporary type combination.

Preferred:

Headings:
- Space Grotesk
OR
- Manrope

Body:
- Inter

Use responsive typography with clamp().

Example hierarchy:

Hero heading:
clamp(3rem, 8vw, 7rem)

H1:
clamp(2.5rem, 5vw, 5rem)

H2:
clamp(2rem, 4vw, 3.5rem)

H3:
1.5rem to 2rem

Body:
16px to 18px

Text must remain highly readable.

Line length should generally remain around 60–75 characters for longer paragraphs.

==========================================================
7. GLOBAL NAVIGATION
==========================================================

Every page MUST contain a working responsive navigation menu.

Desktop navigation:

UE Computer Engineering

Home
About CpE
CpE at UE
Explore ▼
    Specializations
    Careers
    Projects
Community ▼
    Faculty
    SCPES
Contact

Requirements:

- Bootstrap navbar
- Sticky/fixed navbar
- Transparent over hero initially where appropriate
- Transitions to solid or glassmorphism background after scrolling
- Backdrop blur
- Active-page indicator
- Animated underline
- Dropdown menus
- Mobile Bootstrap collapse/hamburger
- Keyboard accessible
- Smooth interaction
- No broken links

Mobile menu should feel polished rather than simply showing default Bootstrap behavior.

==========================================================
8. GLOBAL VISUAL EFFECTS
==========================================================

Make the website VISUALLY LIVELY and HIGHLY INTERACTIVE.

Use rich effects, but do NOT destroy readability or performance.

Implement combinations of:

1. Scroll-triggered reveal animations
2. Staggered card entrances
3. Smooth section transitions
4. Animated gradient backgrounds
5. Subtle grid backgrounds
6. Circuit-board inspired graphics
7. Floating abstract nodes
8. Animated connection lines
9. Mouse-follow lighting effect on selected cards
10. Interactive hover effects
11. Image zoom effects
12. 3D tilt on selected feature cards
13. Parallax layers
14. Animated statistics counters
15. Moving marquee/ticker section
16. Gradient text accents
17. Animated border effects
18. Glassmorphism where appropriate
19. Floating badge animations
20. Background spotlight effects
21. Scroll progress indicator
22. Custom cursor enhancement on desktop OPTIONAL
23. Magnetic CTA hover effect OPTIONAL
24. Animated navbar transition
25. Smooth anchor scrolling
26. Animated accordion icons
27. Interactive modals
28. Image gallery overlays
29. Animated timeline
30. Dynamic filter transitions
31. Loading/page entrance animation
32. Animated hero technical visualization

IMPORTANT:

Animations should feel impressive but controlled.

Avoid:

- excessive bouncing
- constant flashing
- strong motion everywhere
- unreadable animated text
- large performance-heavy effects
- animation that blocks navigation

Respect:

@media (prefers-reduced-motion: reduce)

Disable or greatly reduce non-essential animation for users requesting reduced motion.

==========================================================
9. HERO EXPERIENCE
==========================================================

The homepage hero should immediately communicate COMPUTER ENGINEERING.

Suggested headline:

ENGINEER
WHAT'S NEXT.

Supporting text:

"Explore Computer Engineering at the University of the East—where hardware, software, intelligent systems, and innovation come together."

CTA buttons:

[ Explore Computer Engineering ]
[ Discover CpE at UE ]

Use a visually rich hero.

Possible visuals:

- Circuit board patterns
- PCB traces
- Processor diagrams
- Robotics
- Embedded systems
- Digital network nodes
- Code snippets as visual decoration
- Hardware/software connections
- Floating technical cards
- Abstract computational grid

Create a multi-layer hero with:

- Large typography
- Gradient accent
- Subtle spotlight
- Floating technical elements
- Animated circuit lines
- Parallax layers
- Responsive imagery
- CTA hover animation
- Scroll indicator

The effects should make the landing experience impressive without affecting readability.

==========================================================
10. HOMEPAGE CONTENT
==========================================================

Create the following sections.

SECTION 1
Hero

SECTION 2
What is Computer Engineering?

Explain:

Computer Engineering combines hardware and software engineering principles to design, develop, and improve modern computing systems.

Present three visual concepts:

HARDWARE
SOFTWARE
INTEGRATION

Use interactive cards.

SECTION 3
Explore Computer Engineering

Create cards for:

- Embedded Systems
- Internet of Things
- Artificial Intelligence
- Robotics
- Cybersecurity
- Computer Networks

Provide icons and animated hover states.

SECTION 4
Why Computer Engineering?

Examples:

BUILD
Build intelligent systems and computing devices.

CONNECT
Create networks and connected technologies.

AUTOMATE
Develop systems that interact with the physical world.

INNOVATE
Create new technological solutions.

SECTION 5
Computer Engineering at UE

Provide links/cards to:

- Program
- Learning Experiences
- Laboratories
- Student Projects
- Research
- Community

Avoid claiming specific official details unless verified.

SECTION 6
Featured Student Projects

Display 3–6 project cards.

SECTION 7
Career Possibilities

Highlight:

- Software Engineer
- Embedded Systems Engineer
- IoT Engineer
- Network Engineer
- Cybersecurity Engineer
- AI / Machine Learning Engineer

Include CTA:
Explore Careers

SECTION 8
SCPES Community

Introduce the Society of Computer Engineering Students.

SECTION 9
Animated statistics

Examples of UI labels:

SPECIALIZATIONS
CAREER PATHS
TECHNOLOGY AREAS
COMMUNITY

Do not invent official UE enrollment/statistical figures.

Use conceptual counts only if clearly labeled or omit numeric values.

SECTION 10
Final CTA

"Ready to Explore Computer Engineering?"

Buttons:
Discover the Program
Explore Careers

SECTION 11
Footer

==========================================================
11. PAGE: WHAT IS COMPUTER ENGINEERING?
==========================================================

File:
about-cpe.html

Required topics:

- Definition of Computer Engineering
- Relationship between hardware and software
- Major areas of Computer Engineering
- Role of Computer Engineers in modern technology
- Applications of Computer Engineering
- Importance of Computer Engineering in society

Design this page as an educational visual experience.

Create an interactive diagram:

              COMPUTER ENGINEERING
                       |
            -----------------------
            |                     |
        HARDWARE              SOFTWARE
            |                     |
    Circuits/Sensors/CPU    Code/OS/Algorithms
            |                     |
            -----------+-----------
                       |
                 SMART SYSTEMS

Make portions of the diagram interactive.

On selecting hardware/software/integration, reveal supporting content.

Add:

- visual timeline
- icons
- animated infographic
- application cards
- real-world examples
- responsive layouts

==========================================================
12. PAGE: COMPUTER ENGINEERING AT UE
==========================================================

File:
cpe-ue.html

Introduce the BS Computer Engineering program at the University of the East.

Possible content:

- Program overview
- Program objectives
- Skills developed by CpE students
- Learning experiences
- Laboratories and facilities
- Student projects
- Research and innovation
- Academic opportunities

Organize using Bootstrap tabs and cards.

Tabs:

[ Program ]
[ Skills ]
[ Learning ]
[ Facilities ]

Create an animated learning journey.

Example visual progression:

FOUNDATIONS
↓
PROGRAMMING
↓
DIGITAL SYSTEMS
↓
EMBEDDED SYSTEMS
↓
NETWORKING
↓
INTELLIGENT SYSTEMS
↓
PROJECTS / RESEARCH

IMPORTANT:

Do NOT present this as the official UE curriculum unless supported by official information.

Clearly distinguish illustrative information from verified official program information.

==========================================================
13. PAGE: SPECIALIZATIONS
==========================================================

File:
specializations.html

Include the following fields:

- Embedded Systems
- Internet of Things
- Computer Networks
- Cybersecurity
- Software Development
- Artificial Intelligence
- Machine Learning
- Data Science
- Data Engineering
- Robotics and Automation
- Computer Hardware
- Computer Architecture
- Cloud Computing
- Edge Computing

Implement interactive filters:

[ All ]
[ Hardware ]
[ Software ]
[ Networks ]
[ Intelligence ]
[ Emerging Technology ]

Each specialization card should include:

- Icon
- Name
- Short description
- Example technologies
- Example applications
- Possible related careers
- Explore button

When Explore is clicked, open a Bootstrap modal with additional information.

Animate cards when filters change.

==========================================================
14. PAGE: CAREERS
==========================================================

File:
careers.html

Include career opportunities such as:

- Computer Engineer
- Embedded Systems Engineer
- IoT Engineer
- Software Engineer
- Hardware Engineer
- Network Engineer
- Systems Engineer
- Cybersecurity Engineer
- Data Engineer
- AI / Machine Learning Engineer
- Cloud Engineer
- DevOps Engineer
- Robotics Engineer
- Technical Support Engineer
- Research and Development Engineer

Create a CAREER EXPLORER.

Include:

Search bar:
"Search careers..."

Filters:

[ All ]
[ Hardware ]
[ Software ]
[ Networking ]
[ AI ]
[ Security ]
[ Cloud ]

Create interactive interest selection:

"What interests you?"

Options:

- Building software
- Building machines
- Connecting devices
- Protecting systems
- Artificial intelligence
- Designing hardware

Selecting interests dynamically highlights/reorders or filters relevant careers.

Career cards should contain:

- Role
- Short role description
- Typical responsibilities
- Skills
- Related specialization

==========================================================
15. PAGE: FACULTY
==========================================================

File:
faculty.html

Create a responsive Bootstrap faculty grid.

Cards include:

- Faculty image
- Faculty name
- Academic/professional title
- Area of specialization
- Courses or technical interests
- Skill badges
- View Profile button

Clicking View Profile opens a Bootstrap modal.

Use placeholder faculty information if real verified information is not provided.

DO NOT fabricate real faculty identities or credentials.

Clearly make placeholders easy to replace.

Responsive behavior:

Desktop:
4 cards per row where space allows.

Tablet:
2 cards per row.

Mobile:
1 card per row.

==========================================================
16. PAGE: SCPES
==========================================================

File:
scpes.html

Introduce:

Society of Computer Engineering Students (SCPES)

Include:

- About SCPES
- Organization objectives
- Officers
- Student involvement
- Activities
- Events
- Projects
- Achievements
- Gallery
- Join/contact information

Create sections for:

SCPES HERO

ABOUT

MISSION / OBJECTIVES

OFFICERS

EVENTS

ACTIVITIES

PROJECTS

GALLERY

CALL TO ACTION

Use:

- Bootstrap carousel
- Responsive cards
- Timeline
- Gallery
- Hover overlays
- Lightbox/modal
- Animated event cards

Do not invent official officer names unless actual data is provided.

==========================================================
17. PAGE: STUDENT PROJECTS
==========================================================

File:
projects.html

Showcase Computer Engineering projects.

Categories:

- Embedded Systems
- IoT
- Robotics
- Software Systems
- Machine Learning
- Design Projects
- Research Projects

Implement filter buttons:

[ All ]
[ Embedded ]
[ IoT ]
[ Robotics ]
[ Software ]
[ AI / ML ]
[ Research ]

Each project card:

- Image
- Project name
- Short summary
- Category
- Technologies used
- View Project button

Click View Project:

Open Bootstrap modal containing:

- Large image
- Problem
- Proposed solution
- Technologies
- Project overview
- Results
- Team placeholder

Use dummy academic project examples but make them clearly illustrative and replaceable.

==========================================================
18. PAGE: CONTACT + FAQ
==========================================================

File:
contact.html

Create:

CONTACT HERO

Contact information area

Quick links

Contact form

FAQ

FAQ questions:

- What is the difference between Computer Engineering and Computer Science?
- Is Computer Engineering mostly hardware?
- Do Computer Engineering students learn programming?
- What programming languages are commonly used?
- What careers can Computer Engineering graduates pursue?
- What skills should incoming Computer Engineering students develop?

Use Bootstrap accordion.

Contact form:

- Name
- Email
- Topic
- Message

Implement vanilla JavaScript form validation.

This does not need to actually send emails.

Clearly indicate demonstration-only behavior where relevant.

==========================================================
19. BOOTSTRAP REQUIREMENTS
==========================================================

Demonstrate appropriate use of Bootstrap.

Use several of the following:

- Navbar
- Grid system
- Containers
- Rows / columns
- Cards
- Buttons
- Carousel
- Accordion
- Modal
- Badges
- Forms
- Dropdown
- Responsive utilities

Do NOT use Bootstrap components simply because they exist.

Every component should contribute to:

- Functionality
- Organization
- Usability
- Responsive behavior

==========================================================
20. JAVASCRIPT FEATURES
==========================================================

Implement meaningful vanilla JavaScript functionality.

Required JavaScript enhancements:

1. Sticky navbar state change on scroll
2. Scroll progress indicator
3. Smooth scrolling
4. Scroll reveal animations using IntersectionObserver
5. Staggered card animation
6. Specialization filtering
7. Career search
8. Career category filtering
9. Career interest filtering
10. Project filtering
11. Dynamic active navigation state
12. Back-to-top button
13. Animated counters where appropriate
14. Contact form validation
15. Interactive technical diagram
16. Hero mouse/parallax effects on capable devices
17. FAQ interaction enhancement
18. Reduced-motion detection

Optional:

- Theme switcher
- Mouse spotlight
- Card tilt
- Magnetic buttons
- Page transition overlay

Do NOT use external animation frameworks unless absolutely necessary.

Prefer CSS animations + JavaScript + IntersectionObserver.

==========================================================
21. INTERACTION DESIGN
==========================================================

Cards:

Normal:
flat/subtle shadow

Hover:
- translateY(-6px)
- stronger shadow
- slight scale
- animated accent line
- icon movement
- subtle spotlight

Do not make every card identical.

Feature cards may have different layouts.

Buttons:

Use polished primary and secondary styles.

Primary:
filled red

Secondary:
transparent / outline

Hover:
- subtle scale
- icon movement
- glow/gradient transition

Links:
animated underline.

Images:
slight zoom on hover.

Sections:
fade/slide into place on entering viewport.

==========================================================
22. RESPONSIVE REQUIREMENTS
==========================================================

The entire website MUST work properly on:

- Large desktop
- Standard desktop/laptop
- Tablet
- Mobile
- Small mobile

Use Bootstrap's grid appropriately.

Typical card structure:

<div class="col-12 col-md-6 col-lg-4">

Hero:

Desktop:
text left, visual right.

Mobile:
text
buttons
visual

Mobile requirements:

- No horizontal scrolling
- Touch-friendly controls
- Minimum ~44px interactive targets
- Proper hamburger navigation
- Logical content stacking
- Large readable text
- Comfortable margins
- Reduced decorative clutter
- Responsive images
- Responsive modals
- Appropriate card spacing

==========================================================
23. ACCESSIBILITY REQUIREMENTS
==========================================================

Use semantic HTML5:

<header>
<nav>
<main>
<section>
<article>
<footer>

Every meaningful image must have useful alt text.

Use proper:

<button>

for buttons.

Use:

<a href="">

for navigation.

Forms must have labels.

Support keyboard navigation.

Use visible :focus-visible states.

Use ARIA attributes where appropriate.

Ensure color contrast is adequate.

Do not rely on color alone to communicate state.

Use:

@media (prefers-reduced-motion: reduce)

Reduce animation for users who request it.

==========================================================
24. PERFORMANCE REQUIREMENTS
==========================================================

Despite the rich visual effects, performance must remain good.

Requirements:

- Optimize CSS
- Avoid unnecessarily heavy scripts
- Lazy-load non-critical images
- Avoid giant background videos
- Avoid animation libraries unless necessary
- Use CSS transforms/opacity for animation
- Avoid layout-thrashing JavaScript
- Use requestAnimationFrame where necessary
- Reduce complex effects on mobile
- Disable pointer-follow effects on touch devices
- Avoid excessive DOM elements
- Ensure smooth scrolling and animation

Target a professional-feeling 60fps experience when possible.

==========================================================
25. CONTENT GUIDELINES
==========================================================

The site must contain meaningful Computer Engineering content.

DO NOT use Lorem ipsum.

External information must:

- Come from reliable sources.
- Be attributed when necessary.
- Not present unofficial information as official university information.
- Respect copyright and intellectual property.

For UE-specific facts that cannot be verified:

DO NOT invent them.

Instead create clearly replaceable content sections or placeholders such as:

"Official program information to be inserted from the University of the East source."

However, avoid filling the visible UI with ugly placeholder text. Structure the implementation so factual content is easy to replace.

==========================================================
26. UI COMPONENT SYSTEM
==========================================================

Create reusable visual classes for:

- Navbar
- Hero
- Section headings
- Eyebrow labels
- Primary buttons
- Secondary buttons
- Feature cards
- Glass cards
- Specialization cards
- Career cards
- Profile cards
- Project cards
- Badges
- Stats
- Accordions
- Modals
- Timelines
- CTA sections
- Footer
- Image overlays

Example naming convention:

.site-navbar
.hero
.hero-title
.section-header
.section-eyebrow
.section-title
.feature-card
.tech-card
.profile-card
.project-card
.tech-badge
.cta-section
.site-footer

Keep CSS maintainable and clearly organized.

==========================================================
27. VISUAL INFORMATION ARCHITECTURE
==========================================================

Avoid giant blocks of text.

Convert information into:

- Cards
- Diagrams
- Timelines
- Comparison layouts
- Icons
- Tables
- Accordions
- Callouts
- Statistics
- Step sequences
- Interactive filters
- Highlight blocks
- Visual categories

Example:

Instead of:

"Computer Engineering combines hardware and software..."

Create:

                    COMPUTER ENGINEERING

       HARDWARE       SOFTWARE       INTEGRATION

        Circuits      Programming      IoT
        Sensors       Algorithms       Robotics
        CPUs          Systems          Automation

==========================================================
28. SECTION DESIGN VARIATION
==========================================================

Do not make every section:

white background + heading + three cards.

Create visual rhythm.

Alternate among:

- White sections
- Soft-gray sections
- Dark sections
- Gradient sections
- Split layouts
- Editorial layouts
- Full-width visual sections
- Horizontal card sections
- Bento layouts
- Timelines
- Statistics
- Image + text
- Sticky-scroll storytelling sections

Maintain consistency while adding visual variety.

==========================================================
29. FOOTER
==========================================================

Create a sophisticated footer.

Structure:

UE Computer Engineering

Explore
- About CpE
- CpE at UE
- Specializations
- Careers

Community
- Faculty
- SCPES
- Projects

Resources
- FAQ
- Contact
- University links

Include:

- Brand area
- Navigation links
- Contact area
- Source/academic disclaimer if appropriate
- Copyright

Add subtle technology-themed background graphics.

==========================================================
30. ERROR PREVENTION
==========================================================

Ensure:

- No broken navigation
- No dead buttons
- No undefined JavaScript variables
- No duplicate element IDs
- No console errors
- No overflow issues
- No inaccessible modal behavior
- No missing closing tags
- No invalid HTML structure
- No Bootstrap dependency errors
- All pages link properly to shared CSS and JavaScript

==========================================================
31. UX PRINCIPLE
==========================================================

The overall user journey must follow:

DISCOVER
↓
UNDERSTAND
↓
EXPLORE
↓
ENGAGE
↓
CONNECT

DISCOVER:
Homepage communicates what Computer Engineering is.

UNDERSTAND:
About CpE explains hardware/software/integration.

EXPLORE:
Specializations, projects, careers.

ENGAGE:
Interactive filters, diagrams, galleries.

CONNECT:
Faculty, SCPES, FAQ, contact.

==========================================================
32. REQUIRED WEBSITE OUTCOME
==========================================================

At completion, the website must:

- Explain WHAT COMPUTER ENGINEERING IS
- Introduce COMPUTER ENGINEERING AT UE
- Present CpE SPECIALIZATIONS
- Present CAREER OPPORTUNITIES
- Introduce FACULTY
- Highlight the SCPES ORGANIZATION
- Showcase STUDENT PROJECTS
- Demonstrate proper HTML
- Demonstrate proper CSS
- Demonstrate proper Bootstrap
- Demonstrate meaningful JavaScript exploration
- Provide responsive navigation
- Provide a clean, professional user experience
- Work on desktop, tablet, and mobile
- Maintain consistent visual identity
- Demonstrate proper organization of content
- Demonstrate proper application of web development fundamentals

==========================================================
33. CODING QUALITY
==========================================================

Write clean, understandable code suitable for an academic Computer Engineering project.

HTML:
- Proper indentation
- Semantic elements
- Useful comments
- Logical sections

CSS:
Organize roughly into:

1. Imports
2. Variables
3. Reset/base
4. Typography
5. Utilities
6. Navbar
7. Hero
8. Shared sections
9. Components
10. Page-specific styles
11. Animations
12. Responsive media queries
13. Accessibility/reduced motion

JavaScript:
Organize into clearly named functions.

Example:

initNavbar()
initScrollReveal()
initCounters()
initSpecializationFilters()
initCareerExplorer()
initProjectFilters()
initScrollProgress()
initBackToTop()
initFormValidation()
initInteractiveDiagram()

Do not create unnecessarily complicated JavaScript.

==========================================================
34. IMPORTANT DESIGN REQUIREMENT
==========================================================

DO NOT produce a plain student website.

Push the visual design significantly.

Use bold design choices where appropriate:

- Oversized headings
- Strong composition
- Advanced card layouts
- Layered visual depth
- Animated technology graphics
- Immersive hero
- Bento grids
- Cinematic section transitions
- Modern glass effects
- Interactive visualizations
- Dynamic hover states
- Parallax details
- Scroll-driven reveals
- Technical background elements
- Responsive visual storytelling

However:

VISUAL EFFECTS MUST NEVER REDUCE:

- readability
- accessibility
- navigation clarity
- responsiveness
- loading performance
- usability

The final result should feel lively, premium, interactive, and visually memorable.

==========================================================
35. HOMEPAGE CREATIVE DIRECTION
==========================================================

Use the theme:

"ENGINEER WHAT'S NEXT."

Possible supporting phrases:

"Hardware. Software. Intelligence."

"Build the systems behind tomorrow."

"Where code meets circuits."

Use these as design language rather than claiming official UE slogans.

The homepage can feature a large interactive technical graphic representing:

CPU
→ sensors
→ network
→ software
→ AI
→ robotics

Use animated connecting lines between elements.

==========================================================
36. RESPONSIVE BENTO SECTION
==========================================================

Include at least one modern bento-grid section.

Example:

┌─────────────────────┬──────────────┐
│                     │ Embedded     │
│   COMPUTER          │ Systems      │
│   ENGINEERING       ├──────────────┤
│                     │ Artificial   │
├───────────┬─────────┤ Intelligence │
│ Robotics  │ IoT     │              │
├───────────┴─────────┴──────────────┤
│ Hardware + Software + Innovation   │
└────────────────────────────────────┘

Animate the bento cards subtly.

On mobile, stack the bento layout logically.

==========================================================
37. ADD A TECHNOLOGY MARQUEE
==========================================================

Create a horizontally animated technology strip containing:

HTML
CSS
Bootstrap
JavaScript
Embedded Systems
IoT
Robotics
Artificial Intelligence
Networking
Cybersecurity
Cloud
Computer Architecture

Make it seamless and subtle.

Pause animation for reduced-motion users.

==========================================================
38. LOADING EXPERIENCE
==========================================================

Optional but recommended:

Create a lightweight page entrance/loading transition.

Example:

CpE
ENGINEERING WHAT'S NEXT

Then transition into the homepage.

Keep it under approximately 1 second.

Do not force users to wait unnecessarily.

==========================================================
39. DELIVERABLE
==========================================================

Generate the COMPLETE WORKING PROJECT.

Do not only explain how to build it.

Actually CREATE:

- All HTML pages
- Full CSS
- Full JavaScript
- Working navigation
- Working Bootstrap components
- Responsive layouts
- Interactive filters
- Modals
- Accordions
- Animations
- Project structure

When finished:

1. Show the final folder tree.
2. Verify that every page links correctly.
3. Verify Bootstrap is correctly loaded.
4. Verify style.css is loaded on every page.
5. Verify script.js is loaded correctly.
6. Check for JavaScript console errors.
7. Check responsiveness.
8. Check accessibility basics.
9. Check semantic HTML.
10. Verify no Lorem ipsum exists.
11. Verify all required project topics are represented.
12. Verify at least six pages are fully interconnected.
13. Ensure animations degrade gracefully.
14. Make any corrections required before considering the project complete.

==========================================================
40. DEVELOPMENT STRATEGY
==========================================================

Do not rush immediately into page creation.

Work in this order:

STEP 1
Create project folders.

STEP 2
Create the global design system.

STEP 3
Create shared CSS variables and typography.

STEP 4
Build navbar and footer.

STEP 5
Build homepage.

STEP 6
Establish reusable component styles.

STEP 7
Build About CpE.

STEP 8
Build CpE at UE.

STEP 9
Build Specializations.

STEP 10
Build Careers.

STEP 11
Build Faculty.

STEP 12
Build SCPES.

STEP 13
Build Projects.

STEP 14
Build Contact/FAQ.

STEP 15
Implement shared JavaScript.

STEP 16
Implement animations.

STEP 17
Optimize responsive layouts.

STEP 18
Test all pages and navigation.

STEP 19
Fix accessibility/performance issues.

STEP 20
Perform final UI/UX polish.

==========================================================
41. FINAL QUALITY TARGET
==========================================================

The completed project should give the impression that:

"A Computer Engineering student understands both software development fundamentals and modern interface design."

It should look more polished than an ordinary school project while remaining understandable enough for the student to explain the HTML, CSS, Bootstrap, and JavaScript implementation during presentation or defense.

Prioritize:

1. CONTENT ORGANIZATION
2. FUNCTIONAL NAVIGATION
3. RESPONSIVE DESIGN
4. CONSISTENT VISUAL IDENTITY
5. READABILITY
6. ACCESSIBILITY
7. MEANINGFUL BOOTSTRAP USAGE
8. MEANINGFUL JAVASCRIPT
9. POLISHED UI/UX
10. VISUALLY IMPRESSIVE INTERACTION

Build the entire project now.
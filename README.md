# PracticeSite — Static Website Starter

A small, framework-free static website to practice HTML, CSS, and JavaScript.

## Structure

```
sandbox/
├── index.html        # Page markup (semantic sections)
├── css/
│   └── styles.css    # Styling with CSS variables + dark theme
├── js/
│   └── main.js       # Interactive features (nav, counter, theme, form)
└── README.md
```

## What's inside

- **Responsive layout** with a sticky header and mobile hamburger menu
- **Feature cards** using CSS grid
- **Interactive counter** (increment / decrement)
- **Light/Dark theme toggle** that remembers your choice via `localStorage`
- **Contact form** with client-side validation (demo only — no backend)

## How to run

No build step needed. Just open `index.html` in a browser.

Or serve it locally with any static server, e.g.:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Ideas to practice

- Add a new section (e.g. a testimonials carousel)
- Animate the feature cards on scroll
- Persist the counter value in `localStorage`
- Wire the contact form to a real API
- Add a second page and a working navigation between pages
```

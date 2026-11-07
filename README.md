# SAHARA Landing Page

A modern, responsive, animated landing page for **SAHARA – The Social Welfare Society, IIT Madras (BS Degree Program)**. Built for the SAHARA WebOps Recruitment 2026 practical round.

**Live site:** 

## Features

- **Dark by default, with a light toggle.** The theme choice is remembered between visits.
- **Responsive.** Works on phones, tablets and wide monitors, with a mobile menu.
- **Animated hero.** The logo rises inside a slowly rotating ring of sun rays.
- **Looping keyword strip.** Two rows moving in opposite directions: the sectors SAHARA works in and the skills it builds.
- **About section** with mission, vision, values and animated counters.
- **Team** with photos, roles and a **testimonials** slider.
- **Events** with Upcoming and Past tabs.
- **Gallery slider** ("Moments from the field"). It auto-slides, pauses on hover or touch, has arrows and swipe, and opens a full preview on click.
- **FAQ** with expandable questions.
- **Contact** form and footer with social icons.
- **SAHARA AI chatbot** fixed at the bottom right, with quick options (How SAHARA works, Current or upcoming events, Ask SAHARA AI) and free-text chat through OpenRouter.
- Scroll-reveal animations, active-section highlighting in the nav, keyboard-friendly focus styles and support for reduced-motion settings.

## Tech stack

Plain **HTML, CSS and JavaScript** in a single `index.html`, with no build step and no dependencies. Fonts come from Google Fonts. The chatbot calls the [OpenRouter](https://openrouter.ai) API.

## Project structure

```
.
├── index.html
├── README.md
└── assets
    ├── sahara-logo.jpeg
    └── gallery
        ├── udaipur.jpg
        ├── peepal-farm.jpg
        ├── posters.jpg
        ├── rakshak.jpg
        └── orientation.jpg
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Enable the SAHARA AI chatbot

1. Create an API key at [openrouter.ai/keys](https://openrouter.ai/keys).
2. In `index.html`, find the `CONFIG` block at the top of the `<script>` and set:

   ```js
   const OPENROUTER_API_KEY = "your-key-here";
   const MODEL = "openai/gpt-4o-mini"; // any OpenRouter model id
   ```

3. Reload the page and open the chat button.

> **Security note:** this is a frontend-only project, so the key is visible to anyone who views the page source. Do not commit a real key to a public repo. Set a spending limit on the key, or route requests through a small backend or serverless function before going public. Without a key, the chatbot still answers the two quick options and tells visitors the AI is not connected yet.

## Customising content

All text content lives in the script at the bottom of `index.html`:

| What | Where |
| --- | --- |
| Team and testimonials | `TEAM` |
| Upcoming and past events | `EVENTS` |
| Keyword strip | `SECTORS` and `SKILLS` |
| FAQ | `FAQ` |
| Gallery photos and captions | `GAL` (images in `assets/gallery/`) |
| Chatbot knowledge | `SYSTEM` prompt |

Team photos and the Indore event photo currently load from the previous SAHARA website. Copy them into `assets/` and update the `IMG` paths to host everything yourself.

## Notes

- The gallery images in `assets/gallery/` are illustrations used as placeholders. Replace them with real event photos using the same file names.
- Upcoming event entries are placeholders until dates are announced.
- Content and facts were gathered from the existing SAHARA website and SAHARA's LinkedIn page. The page itself was built from scratch.
- AI tools (Claude) were used to help build this project, as allowed by the task brief.

## Credits

Built by the candidate for SAHARA WebOps Recruitment 2026.
SAHARA – The Social Welfare Society, IIT Madras BS Degree Program.

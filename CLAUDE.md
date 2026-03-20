# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website hosted on GitHub Pages (`andredfaria.github.io`). It's a static site — no build step is needed for the main site. It serves as André de Faria Carvalho's CV/portfolio and hosts several mini-projects and interactive apps.

## Local Development

Open any HTML file with VS Code's Live Server extension on port **5501**.

No npm install or build step is needed for the main site.

The `hacker/` subdirectory has a Gulp-based build setup (Bootstrap/Grayscale template) but it's optional for most work.

## Analytics Injection

`inject_ackee.py` is a utility script that injects the Ackee analytics tracker into all HTML files. Run it after adding new HTML pages:

```bash
python inject_ackee.py
```

It skips files that already have the tracker and inserts the `<script>` tag before `</head>`.

## Architecture

The site is organized as a flat root with self-contained subdirectory projects:

- **Root HTML files** — standalone pages: `index.html` (main portfolio/CV), `calculadora.html`, `bingo.html`, `qrcode.html`, `regra-de-3.html`, `pescaria.html`, `troca-cor.html`, etc.
- **`/treino/`** — Workout generator app with API integration (MuscleWiki, ExRx.net) and Local Storage caching
- **`/hacker/`** — Educational security website (Bootstrap Grayscale template, has own Gulp build)
- **`/otica/`** — Optical store showcase site
- **`/kids/`** — Kids project (two versions: original + remodeled)
- **`/flappy/`** — Flappy Bird clone game
- **`/financeiro/`** — Financial tracking page
- **`/certificados/`** — Certificate storage (PDFs)
- **`/arquivos/`** — Shared assets (PDFs, images)

The main `index.html` uses Bootstrap, Font Awesome, jQuery, and the `orbit-1.css` theme for the CV layout.

## Deployment

Push to `master` branch — GitHub Pages deploys automatically. No CI/CD pipeline.

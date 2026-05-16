# Buffet Kod Baje — Website

Promotional website for Buffet Kod Baje, a traditional restaurant in Drniš, Croatia.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (opens browser automatically)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Photos

Drop your photos into the appropriate folder inside `public/img/`:

| Folder | Purpose | Recommended size |
|--------|---------|-----------------|
| `public/img/hero/` | Hero background | 1920×1080 (desktop), 768×1024 (mobile) |
| `public/img/food/` | Dish photos | 600×400 |
| `public/img/gallery/` | Interior, ambiance | 800×600 |
| `public/img/brand/` | Logo, og-image | Logo: SVG preferred |

Preferred format: **WebP** (smaller files, better quality). JPEG as fallback.

## Updating Content

- **Menu items:** Edit `src/data/menu.json`
- **All other text:** Edit `src/data/content.json`
- Both files have Croatian (`hr`) and English (`en`) versions of every string.

## Tech Stack

- [Vite](https://vitejs.dev/) — Build tool & dev server
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- Vanilla JavaScript (ES modules)
- No framework — keeps it fast and simple

## Project Structure

```
├── public/img/         ← Your photos go here (not processed by build)
├── src/
│   ├── css/main.css    ← Tailwind + custom styles
│   ├── js/             ← Modular JavaScript
│   └── data/           ← Content & menu (JSON)
├── index.html          ← The page
└── dist/               ← Production build output (gitignored)
```

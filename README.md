# Derivative

Family Memory website for collecting family stories, photos, and personal notes.

## Features

- Family tree with profile photos
- Memory photo gallery with random photo viewer and lightbox
- America work panel with BKK/Montana time comparison and Thailand return countdown
- Private login messages for family users

## Local Development

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The production build is generated in `dist`.

## Supabase Letters

The Pink digital postbox can store letters in Supabase when environment variables are set.

1. Create a Supabase project.
2. Open Supabase SQL Editor and run `supabase/partner_letters.sql`.
3. Copy `.env.example` to `.env.local`.
4. Fill in `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` from Supabase Project Settings > API.
5. Restart `npm run dev`.

For GitHub Pages, add both names as repository variables under Settings > Secrets and variables > Actions > Variables.

Without these environment variables, the postbox falls back to browser `localStorage`.

Telegram notifications for new letters are documented in `supabase/telegram_notify.md`.

## GitHub Pages

This project is configured for GitHub Pages at:

```text
https://aomsubboy.github.io/Derivative/
```

During local development the app uses `/`, and during production build it uses `/Derivative/`.

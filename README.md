# Ahmad ke liye — v2 (short, playful scroll story)

## Run on your computer (Command Prompt, inside this folder)
```
npm install
npm run dev
```
Open http://localhost:5173 in Chrome. Phone on same Wi-Fi: `npm run dev -- --host`

## Edit the words
Everything Ahmad reads is in **src/data/story.js**. Always use "aap", never "tum".

## The story (just scroll)
1. Opening — "Ahmad... aap ek minute?" + one button "andar aayen?"
2. Envelope opens by itself
3. Sab se pehli yaad — late-night call scene slowly turns into waiting (scroll-driven)
4. DRAMA 😭 — tap Bubu behind the curtain
5. AaaTma 👻 — ghost Bubu follows Dudu while you scroll
6. Mazak side pe → meri ghalti → Ali (two paths) → kya karna chahiye tha
7. Phir bhi → kal → trust (sticky notes) → hamari shaadi
8. Bas ek aakhri baat → "yeh khat aapke liye" → main yahin hoon / jab aap ready hon

## Folders
- src/data/story.js — all text + settings
- src/sections/ — each scene
- src/components/ — BubuScene (original illustrations), ScrollStory, Envelope, FloatingNote, Lines...
- src/styles/global.css — colors, fonts, mobile layout
- public/bubu/ — your own stickers (optional)
- public/audio/ — music (optional)

## Build / deploy
`npm run build` makes the `dist/` folder. vite.config.js already has `base: './'`, so dist works on GitHub Pages and Hostinger.

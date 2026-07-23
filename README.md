# the-con-archive

This is an archive of historical and modern grifters throughout history. Includes grifters and cons!! React Vite App!

## Overview
This is an archive of historical and modern grifters throughout history. Includes grifters and cons!! React Vite App!

## Tech Stack
- React
- Vite
- Express

## Project Structure
```
the-con-archive/
  - dist-prerender
  - src
  (17 files total)
```

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
```bash
git clone https://github.com/1nc0gn30/the-con-archive.git
cd the-con-archive
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Available Scripts
  npm run dev - vite --port=3000 --host=0.0.0.0
  npm run build - vite build --outDir dist/static && vite build --ssr src/entry-server.tsx --outDir dist/server && node --experimental-strip-types prerender.ts
  npm run preview - vite preview
  npm run clean - rm -rf dist
  npm run lint - tsc --noEmit

## Original README
<details>
<summary>Click to expand original README</summary>

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/38c40ee6-05bc-425f-abc4-830baef4b04c

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
# the-con-archive

</details>

## TODO / Roadmap
- [ ] Add unit tests
- [ ] Add LICENSE file
- [ ] Add Dockerfile for containerized deployment
- [ ] Add deployment configuration
- [ ] Consider adding Tailwind CSS
- [ ] Add CI/CD pipeline
- [ ] Add contribution guidelines (CONTRIBUTING.md)
- [ ] Improve error handling and edge cases
- [ ] Add environment variable documentation
- [ ] Update dependencies to latest versions
- [ ] Add code comments and inline documentation

## Deployment
This project can be deployed to Netlify, Vercel, or any static host.

## Author
**Neal Frazier** - [@AshAmplifies](https://github.com/1nc0gn30)

## Links
- GitHub: https://github.com/1nc0gn30/the-con-archive

---
*This README was enhanced as part of the neals-projects-2026 batch update.*

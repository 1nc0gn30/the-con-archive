import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GRIFTERS } from './src/data.ts';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);
async function prerender() {
    const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
    const { render } = await import('./dist/server/entry-server.js');
    const routesToPrerender = [
        '/',
        '/grifters',
        '/cons',
        ...GRIFTERS.map(g => `/grifters/${g.id}`)
    ];
    for (const url of routesToPrerender) {
        const helmetContext = {};
        const appHtml = render(url, helmetContext);
        const { helmet } = helmetContext;
        let html = template.replace(`<!--app-html-->`, appHtml);
        if (helmet) {
            const headTags = `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      `;
            html = html.replace(`<!--app-head-->`, headTags);
        }
        else {
            html = html.replace(`<!--app-head-->`, '');
        }
        const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
        const dir = path.dirname(toAbsolute(filePath));
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(toAbsolute(filePath), html);
        console.log('pre-rendered:', filePath);
    }
    // Move dist/static to dist
    fs.cpSync(toAbsolute('dist/static'), toAbsolute('dist-final'), { recursive: true });
    fs.rmSync(toAbsolute('dist'), { recursive: true });
    fs.renameSync(toAbsolute('dist-final'), toAbsolute('dist'));
}
prerender().catch(console.error);

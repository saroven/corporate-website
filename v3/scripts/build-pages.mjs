import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, existsSync, statSync } from 'node:fs';
import { join, basename, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const partialsDir = join(root, 'src', 'partials');
const pagesDir = join(root, 'src', 'pages');
const outDir = root;

const read = (p) => readFileSync(p, 'utf8');

const partials = {};
for (const file of readdirSync(partialsDir)) {
    const key = basename(file, extname(file));
    partials[key] = read(join(partialsDir, file));
}

const tokenPattern = /<!--\s*@include\(([a-z-]+)\)\s*-->/g;

mkdirSync(outDir, { recursive: true });

const copyDir = (src, dest) => {
    if (!existsSync(src)) return;
    for (const entry of readdirSync(src)) {
        const s = join(src, entry);
        const d = join(dest, entry);
        if (statSync(s).isDirectory()) {
            mkdirSync(d, { recursive: true });
            copyDir(s, d);
        } else {
            mkdirSync(dirname(d), { recursive: true });
            copyFileSync(s, d);
        }
    }
};

copyDir(join(root, 'src', 'js'), join(root, 'assets', 'js'));
if (outDir !== root) {
    copyDir(join(root, 'assets'), join(outDir, 'assets'));
    copyDir(join(root, 'src', 'js'), join(outDir, 'assets', 'js'));
}
console.log(`synced assets → ${outDir}/assets`);

let built = 0;
for (const file of readdirSync(pagesDir)) {
    if (extname(file) !== '.html') continue;
    let html = read(join(pagesDir, file));
    html = html.replace(tokenPattern, (match, key) => {
        if (!(key in partials)) {
            console.warn(`Missing partial: ${key} in ${file}`);
            return '';
        }
        return partials[key];
    });
    const outFile = join(outDir, basename(file));
    writeFileSync(outFile, html);
    built++;
    console.log(`built ${outFile}`);
}

console.log(`\nDone — ${built} page(s) written to ${outDir}/`);

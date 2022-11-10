import { defineConfig } from "vite";
// import pugPlugin from "vite-plugin-pug";
import vitePugPlugin from "./vite-plugin-pug-edited";
import { resolve, extname, posix } from "path";
import { readFileSync, readdirSync } from "fs";
import * as yaml from "js-yaml";
import * as fs from "fs";
import * as path from "path";

function getShortName(file, root) {
    return file.startsWith(root + "/") ? posix.relative(root, file) : file;
}

const merge = () => {
    console.log(`now merging  files`);
    const fn = { json: JSON.stringify, yaml: yaml.load };
    const files = readdirSync(resolve(__dirname, "src/data"));
    return files.reduce(
        (acc, file) => ({
            ...acc,
            ...fn[extname(file).slice(1)](readFileSync(resolve(__dirname, "src/data", file))),
        }),
        {},
    );
};

function htmlsFiles() {
    let files = fs.readdirSync(path.resolve(process.cwd()));
    files = files
        .filter(e => path.extname(e) === ".html")
        .map(e => path.basename(e).replace(".html", ""));
    return files;
}
const htmls = htmlsFiles();

const input = htmls.reduce((acc, e) => ({ ...acc, [e]: resolve(__dirname, e + ".html") }), {});

export default defineConfig({
    plugins: [vitePugPlugin({ pugLocals: () => merge() })],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                ...input,
            },
        },
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
            "@assets": resolve(__dirname, "./assets"),
            "@var": resolve(__dirname, "./src/sass/_variables.sass"),
        },
    },
});

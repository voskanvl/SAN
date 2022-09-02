import { defineConfig } from "vite";
// import pugPlugin from "vite-plugin-pug";
import vitePugPlugin from "vite-plugin-pug-transformer";
import { resolve, extname } from "path";
import { readFileSync, readdirSync } from "fs";
import * as yaml from "js-yaml";

const options = { pretty: true }; // FIXME: pug pretty is deprecated!
const locals = {
    name: "ШВСМ",
};

const STANDART = "yaml";

const merge = standart => {
    const fn = { json: JSON.stringify, yaml: yaml.load }[standart];
    const files = readdirSync(resolve(__dirname, "src/data"));
    const jsons = files.filter(file => extname(file) === ".yaml");
    return jsons.reduce(
        (acc, file) => ({
            ...acc,
            ...fn(readFileSync(resolve(__dirname, "src/data", file))),
        }),
        {},
    );
};

export default defineConfig({
    // plugins: [pugPlugin.default(options, locals)],
    plugins: [vitePugPlugin({ pugLocals: merge(STANDART) })],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                // second: resolve(__dirname, "second.html"),
            },
        },
    },
});

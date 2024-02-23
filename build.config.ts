import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    entries: [
        {
            builder: 'mkdist',
            input: './src/',
            outDir: './dist',
            cleanDist: true,
            format: 'cjs',
        },
        {
            builder: 'mkdist',
            input: './src/',
            outDir: './dist',
            declaration: true,
            format: 'esm',
        },
    ],
    'externals': ['reflect-metadata', 'glob', 'minimatch', 'path-scurry', 'brace-expansion', 'minipass', 'lru-cache', 'balanced-match'],
});
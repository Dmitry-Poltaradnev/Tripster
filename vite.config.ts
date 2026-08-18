import path from "node:path";
import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/api/countries': {
                target: 'https://api.restcountries.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/countries/, ''),
            },
        },
    },
    test: {
        environment: "jsdom",
        setupFiles: "./tests/test.ts",
        globals: true,
        include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
        exclude: ["tests/**"],
    },
})
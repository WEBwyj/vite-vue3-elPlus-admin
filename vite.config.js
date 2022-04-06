import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: resolve(__dirname, "src")
            }
        ]
    },
    server: {
        open: true,
        cors: true,
        proxy: {
            "/api": {
                target: "localhost:3000",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                },
                rewrite: path => path.replace(/^\/api/, "")
            }
        }
    },
    /* 打包配置 */
    base: "./",
    build: {
        brotliSize: false,
        emptyOutDir: false,
        outDir: "dist",
        assetsDir: "static"
    }
});

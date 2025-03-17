// eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.vue"],
    plugins: {
      vue,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.nodeBuiltin,
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  globalIgnores(["dist", "*.d.ts"]),
]);

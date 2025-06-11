import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import ts from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["dist/", "dev/dist/", "node_modules/", "**/*.css"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  prettier,
];

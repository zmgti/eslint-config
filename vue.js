const globals = require("globals")
const standardConfig = require("eslint-config-standard-with-typescript")
const vuePlugin = require("eslint-plugin-vue")

const vue = {
   files: ["**/*.js", "**/*.ts", "**/*.vue"],
   languageOptions: {
      globals: {
         ...globals.es2021,
         ...globals.browser,
         ...globals.node
      },
      parser: require("vue-eslint-parser"),
      parserOptions: {
         ecmaVersion: "latest",
         parser: require("@typescript-eslint/parser"),
      },
   },
   plugins: {
      vue: vuePlugin,
      typescript: require("@typescript-eslint/eslint-plugin"),
      prettier: require("eslint-plugin-prettier")
   },
   rules: {

      /* ==== Standard ==== */
      ...standardConfig.rules,

      /* ==== General Rules ==== */
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      "eqeqeq": ["warn", "always"],
      "no-duplicate-imports": "off",
      "rest-spread-spacing": ["error", "never"],
      "no-empty-function": "off",
      "no-console": [
         "warn",
         {
            "allow": ["warn", "error", "info", "debug"]
         }
      ],
      "no-magic-numbers": ["error", { "ignoreArrayIndexes": true }],

      /* ==== Prettier ==== */
      "prettier/prettier": [
         "error",
         {
            "printWidth": 110,
            "useTabs": false,
            "tabWidth": 3,
            "singleQuote": true,
            "trailingComma": "none",
            "arrowParens": "always",
            "semi": false,
            "endOfLine": "lf",
            "vueIndentScriptAndStyle": false,
            "singleAttributePerLine": true,
            "bracketSameLine": true,
            "jsxBracketSameLine": true,
         },
         { "usePrettierrc": false }
      ],

      /* ==== TypeScript ==== */
      "typescript/no-empty-interface": "warn",
      "typescript/naming-convention": [
         "error",
         {
            "selector": "interface",
            "format": ["PascalCase"],
            "custom": {
               "regex": "^I[A-Z]",
               "match": true
            }
         }
      ],

      /* ==== Vue ==== */
      ...vuePlugin.configs["vue3-essential"].rules,
      ...vuePlugin.configs["vue3-recommended"].rules,
      ...vuePlugin.configs["vue3-strongly-recommended"].rules,
      "vue/no-v-for-template-key": "warn",
      "vue/multi-word-component-names": "off",
      "vue/require-default-prop": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/script-indent": [
         "off",
         3,
         { "baseIndent": 0 }
      ],
      "vue/html-indent": [
         "off",
         3,
         { "baseIndent": 0 }
      ],
      "vue/max-attributes-per-line": ["error", {
         "singleline": { "max": 1 },
         "multiline": { "max": 1 }
      }],
      "vue/html-closing-bracket-newline": ["error", {
         "singleline": "never",
         "multiline": "never"
      }],
      "vue/v-on-event-hyphenation": "off",
      "vue/attribute-hyphenation": "off",
      "vue/html-self-closing": ["error", {
         "html": {
            "normal": "never",
            "void": "always"
         }
      }],
      "vue/html-closing-bracket-spacing": ["error", {
         "startTag": "never",
         "endTag": "never",
         "selfClosingTag": "always"
      }]
   },
}

module.exports = vue
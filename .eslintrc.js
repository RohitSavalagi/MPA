module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "2020",
    "tsconfigRootDir": __dirname,
    "project": "tsconfig.json",
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "overrides": [
    {
      "files": ["*.component.html"],
      "parser": "@angular-eslint/template-parser",
      "plugins": ["@angular-eslint/template"],
      "rules": {
        "@angular-eslint/template/banana-in-a-box": "error",
        "@angular-eslint/template/no-negated-async": "error",
        "@angular-eslint/template/cyclomatic-complexity": "error"
      }
    }
  ],
  "ignorePatterns": [
    "*.d.ts",
    "node_modules/",
    "karma.conf.js",
    "src/environments/*",
    "src/app/services/hammer-plugin-a6.patch.ts",
    "src/polyfills.ts",
    "src/test.ts",
    "src/hmr.ts",
    "src/**/*.spec.ts",
    "src/assets/route.js",
    "src/app/components/theme/ux-theme.helper.ts"
  ],
  "plugins": [
    "@angular-eslint/eslint-plugin",
    "eslint-plugin-import",
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "import",
    "modules-newline"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@angular-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript"
  ],
  "rules": {
    "@angular-eslint/component-class-suffix": "error",
    "@angular-eslint/component-selector": [
      "error",
      {
        "type": "element",
        "prefix": "ft",
        "style": "kebab-case"
      }
    ],
    "@angular-eslint/directive-class-suffix": "error",
    "@angular-eslint/no-host-metadata-property": "error",
    "@angular-eslint/no-input-rename": "error",
    "@angular-eslint/no-inputs-metadata-property": "error",
    "@angular-eslint/no-output-on-prefix": "error",
    "@angular-eslint/no-output-rename": "error",
    "@angular-eslint/no-outputs-metadata-property": "error",
    "@angular-eslint/use-lifecycle-interface": "error",
    "@angular-eslint/use-pipe-transform-interface": "error",
    // value should be error below
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/restrict-template-expressions": "warn",
    "no-useless-escape": "warn",
    "prefer-rest-params": "warn",
    "no-shadow": [
      "warn",
      {
        "hoist": "all"
      }
    ],
    // value should be error above
    "@typescript-eslint/consistent-type-definitions": "error",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/indent": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "@typescript-eslint/semi": [
      "error",
      "always"
    ],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-body-style": "error",
    "brace-style": [
      "error",
      "1tbs"
    ],
    "constructor-super": "error",
    "curly": "error",
    "eol-last": "error",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "id-blacklist": "off",
    "id-match": "off",
    "import/no-deprecated": "warn",
    "max-len": [
      "error",
      {
        "code": 350
      }
    ],
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": [
      "error",
      {
        "allow": [
          "log",
          "warn",
          "dir",
          "timeLog",
          "assert",
          "clear",
          "count",
          "countReset",
          "group",
          "groupEnd",
          "table",
          "dirxml",
          "error",
          "groupCollapsed",
          "Console",
          "profile",
          "profileEnd",
          "timeStamp",
          "context"
        ]
      }
    ],
    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-multiple-empty-lines": "error",
    "no-new-wrappers": "error",
    "no-restricted-imports": [
      "error",
      "rxjs/index"
    ],
    "no-throw-literal": "error",
    "no-trailing-spaces": "off",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unused-labels": "error",
    "no-var": "error",
    "prefer-const": "error",
    "radix": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/"
        ]
      }
    ],
    "@typescript-eslint/tslint/config": [
      "error",
      {
        "rules": {
          "import-spacing": true,
          "typedef": [
            true,
            "call-signature",
            "property-declaration",
            "parameter"
          ],
          "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-separator",
            "check-type"
          ]
        }
      }
    ]
  }
};

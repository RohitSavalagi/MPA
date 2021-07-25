module.exports = {
    root: true,
    overrides: [
        {
            files: ["*.ts"],
            parserOptions: {
                project: [
                    "tsconfig.*?.json",
                    "e2e/tsconfig.json"
                ],
                createDefaultProgram: true
            },
            plugins: [
                "@angular-eslint/eslint-plugin",
                "eslint-plugin-import",
                "@typescript-eslint",
                "@typescript-eslint/tslint",
                "import",
                "modules-newline"
            ],
            extends: [
                'eslint:recommended',
                "plugin:@angular-eslint/recommended",
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'plugin:@angular-eslint/recommended',
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:import/typescript",
                'plugin:prettier/recommended'
            ],
            rules: {
                'object-curly-newline': [
                    'error',
                    {
                        'ImportDeclaration': { 'multiline': true, 'minProperties': 2 },
                        'ExportDeclaration': { 'multiline': true, 'minProperties': 2 }
                    }
                ],
                "prettier/prettier": ["off", {
                    "endOfLine":"lf"
                }],
                //
                'modules-newline/import-declaration-newline': 'error',
                'modules-newline/export-declaration-newline': 'error',
                "import/no-unresolved": "off",
                "import/named": "warn",
                "import/namespace": "warn",
                "import/no-named-as-default": "off",
                "import/export": "warn",
                "import/order": [
                    "error",
                    {
                        "groups": ["builtin", "external", "parent", "sibling", "index"],
                        "newlines-between": "always",
                        "alphabetize": {
                            "order": "asc",
                            "caseInsensitive": true
                        }
                    }
                ],
                "@angular-eslint/component-class-suffix": "error",
                "@angular-eslint/component-selector": [
                    "error",
                    {
                        "type": ["element", "attribute"],
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
                "@angular-eslint/prefer-on-push-component-change-detection": "error",
                "@typescript-eslint/no-this-alias": "warn",
                "@typescript-eslint/unbound-method": ["error", {
                    "ignoreStatic": true
                }],
                "@typescript-eslint/no-unsafe-assignment": "error",
                "@typescript-eslint/no-unsafe-member-access": "error",
                "@typescript-eslint/no-unsafe-return": "error",
                "@typescript-eslint/no-explicit-any": "error",
                "@typescript-eslint/no-misused-promises": "error",
                "@typescript-eslint/no-unused-vars": ["error"],
                "@typescript-eslint/restrict-plus-operands": "error",
                "@typescript-eslint/restrict-template-expressions": "error",
                "no-useless-escape": "warn",
                "prefer-rest-params": "warn",
                "no-shadow": ["warn", { "hoist": "all" }],
                "@typescript-eslint/consistent-type-definitions": "error",
                "@typescript-eslint/naming-convention": "error",
                "@typescript-eslint/no-unsafe-call": "error",
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
                "quote-props": "off",
                "quotes": ["error", "double", { "allowTemplateLiterals": true }],
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
                    "error"
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
                                "arrow-call-signature",
                                "arrow-parameter",
                                "call-signature",
                                "property-declaration",
                                "parameter",
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
            },
        },
        {
            files: ["*.component.html"],
            extends: ["plugin:@angular-eslint/template/recommended"],
            rules: {
                "max-len": [
                    "error",
                    {
                        "code": 140
                    }
                ]
            }
        },
        {
            files: ["*.component.ts"],
            extends: ["plugin:@angular-eslint/template/process-inline-templates"]
        },
        {
            files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
            parserOptions: {
                project: './tsconfig.spec.json',
            },
            extends: ['plugin:jasmine/recommended'],
            plugins: ['jasmine'],
            env: { jasmine: true },
            rules: {
                '@typescript-eslint/no-unused-vars': 'off',
            },
        }
    ]
}

module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            impliedStrict: true,
            classes: true,
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
        jquery: true,
        jest: true,
    },
    rules: {
        'no-debugger': 0,
        'no-alert': 0,
        'no-await-in-loop': 0,
        'no-return-assign': ['error', 'except-parens'],
        'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-unused-vars': [
            1,
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: 'res|next|^err',
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        'arrow-body-style': [2, 'as-needed'],
        'no-unused-expressions': [
            2,
            {
                allowTaggedTemplates: true,
            },
        ],
        'no-param-reassign': [
            2,
            {
                props: false,
            },
        ],
        'max-len': [
            'warn',
            {
                code: 100,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'no-console': 0,
        'import/prefer-default-export': 0,
        import: 0,
        'func-names': 0,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'import/extensions': 0,
        'no-underscore-dangle': 0,
        'consistent-return': 0,
        'react/display-name': 1,
        'react/no-array-index-key': 0,
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': 0,
        'react/forbid-prop-types': 0,
        'react/no-unescaped-entities': 0,
        'jsx-a11y/accessible-emoji': 0,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
        radix: 0,
        'no-shadow': [
            2,
            {
                hoist: 'all',
                allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
            },
        ],
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 100,
                bracketSpacing: true,
                tabWidth: 4,
                // Helps with Windows users facing CLRF eslint/prettier error
                endOfLine: 'auto',
                jsxBracketSameLine: false,
            },
        ],
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref'],
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'warn',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
    plugins: ['html', 'prettier', 'react', 'react-hooks'],
    // Typescript Config
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                // 'airbnb',
                'prettier',
                'prettier/react',
                'prettier/@typescript-eslint',
                'plugin:import/typescript',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parser: '@typescript-eslint/parser',
            settings: {
                react: {
                    version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
                },
            },
            parserOptions: {
                project: './tsconfig.json',
                ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
                sourceType: 'module', // Allows for the use of imports
                ecmaFeatures: {
                    jsx: true, // Allows for the parsing of JSX
                },
            },
            rules: {
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error'],
                'import/extensions': [
                    'error',
                    'ignorePackages',
                    {
                        js: 'never',
                        jsx: 'never',
                        ts: 'never',
                        tsx: 'never',
                    },
                ],
                'prettier/prettier': [
                    'error',
                    {
                        trailingComma: 'es5',
                        singleQuote: true,
                        printWidth: 100,
                        bracketSpacing: true,
                        tabWidth: 4,
                        // Helps with Windows users facing CLRF eslint/prettier error
                        endOfLine: 'auto',
                        jsxBracketSameLine: false,
                    },
                ],
            },
            plugins: ['@typescript-eslint', 'prettier'],
        },
    ],
};

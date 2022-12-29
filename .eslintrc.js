module.exports = {
    extends: ['airbnb', 'eslint:recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 2022,
        requireConfigFile: false,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    env: {
        browser: true,
        node: true,
        jest: true,
    },
    plugins: ['html', 'react-hooks'],
    rules: {
        import: 0,
        radix: 0,
        indent: 0,
        quotes: 0,
        'no-use-before-define': 'off',
        'no-debugger': 0,
        'no-alert': 0,
        'no-await-in-loop': 0,
        'no-return-assign': ['error', 'except-parens'],
        'no-redeclare': 'off',
        'arrow-body-style': [2, 'as-needed'],
        'import/order': ['warn', { 'newlines-between': 'always' }],
        'no-console': 0,
        'import/prefer-default-export': 0,
        'func-names': 0,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'import/extensions': 0,
        'no-underscore-dangle': 0,
        'consistent-return': 0,
        'no-restricted-syntax': [
            2,
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
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
        'no-shadow': [
            2,
            {
                hoist: 'all',
                allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        'dot-notation': [
            'error',
            {
                allowKeywords: true,
                allowPattern: '^[a-z]+(_[a-z]+)+$',
            },
        ],
        // React
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-no-bind': 0,
        'react/jsx-one-expression-per-line': 0,
        'jsx-a11y/href-no-hash': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'warn',
        'react/display-name': 1,
        'react/no-array-index-key': 0,
        'react/react-in-jsx-scope': 0,
        'react/prefer-stateless-function': 0,
        'react/forbid-prop-types': 0,
        'react/no-unescaped-entities': 0,
        'jsx-a11y/accessible-emoji': 0,
        'react/require-default-props': 0,
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/anchor-is-valid': [
            'warn',
            {
                aspects: ['invalidHref'],
            },
        ],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        ],
    },
    settings: {
        'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.jsx'],
            },
        },
    },
};

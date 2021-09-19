module.exports = {
    globals: {
        React: true,
        JSX: true,
    },
    // These are all of the rule sets being extended
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Extend rules from .eslintrc.js
        './.eslintrc.json',
    ],
    // Allows ESlint to lint typescript code
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    // Typescript specific rules
    rules: {
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false,
            },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': [
            'warn',
            {
                ignoreDeclarationMerge: true,
            },
        ],
        '@typescript-eslint/no-floating-promises': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-unused-vars': 'off',
    },
    parserOptions: {
        project: './tsconfig.json',
    },
};

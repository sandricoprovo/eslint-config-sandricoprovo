module.exports = {
    // These are all of the rule sets being extended
    extends: [
        'plugin:@typescript-eslint/recommended',
        'air-bnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        // Extend rules from .eslintrc.js
        './.eslintrc.js',
    ],
    // Allows ESlint to lint typescript code
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', '@babel/plugin-transform-typescript'],
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
    },
    parserOptions: {
        project: './tsconfig.json',
    },
};

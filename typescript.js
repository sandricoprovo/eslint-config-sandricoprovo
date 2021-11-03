module.exports = {
	globals: {
		React: true,
		JSX: true,
	},
	// These are all of the rule sets being extended
	extends: [
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		// Extend rules from .eslintrc.js
		'./.eslintrc.js',
	],
	// Allows ESlint to lint typescript code
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint'],
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.js', '.jsx'],
			},
			typescript: {
				alwaysTryTypes: true,
			},
		},
		'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
	},
	// Typescript specific rules
	rules: {
		'no-redeclare': 'off',
		'import/no-unresolved': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false,
			},
		],
		'@typescript-eslint/no-redeclare': [
			'warn',
			{
				ignoreDeclarationMerge: true,
			},
		],
	},
};

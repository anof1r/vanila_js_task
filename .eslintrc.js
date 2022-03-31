module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'linebreak-style': [
			'error',
			'windows'
		],
		'semi': [
			'error',
			'always'
		],
		'capitalized-comments': 'error',
		'no-inline-comments': 'error',
		'multiline-comment-style': ['error','separate-lines'],
		'max-len': ['error', { 'code' : 120 }],
		'no-mixed-spaces-and-tabs': 'error',
		'indent':['error', 'tab'],
		'object-curly-spacing': ['error', 'always', { 'arraysInObjects': false } ],
		'comma-dangle': ['error', 'never'],
		'dot-notation': 'error',
		'new-cap': 'error',
		'object-curly-newline': ['error',{ 'consistent': true }],
		'no-multi-spaces': 'error',
		'quotes': ['error', 'single'],
		'camelcase': 'error',
		'space-before-blocks': 'error',
		'no-var': 'error'
	}
};

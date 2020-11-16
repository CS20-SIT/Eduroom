module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
	parserOptions: {
		ecmaVersion: 12,
	},
	plugins: ['prettier'],
	rules: {},
}

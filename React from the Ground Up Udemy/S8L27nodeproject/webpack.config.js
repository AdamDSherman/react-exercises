module.exports = {
	entry: [
		'./src/index.jsx'
	],
	output: {
		filename: './bundle.js'
	},
	module: {
		rules: [{
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	}
}

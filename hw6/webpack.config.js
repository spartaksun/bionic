'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'jshint-loader'
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/index.html' },
			{ from: './src/style.css' }
		])
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	}
};














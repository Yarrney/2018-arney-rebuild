const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractStyles = new ExtractTextPlugin('main.css');
const path = require('path');
// const extractFonts = new ExtractTextPlugin('fonts.css');

module.exports = {
	entry: './src/js/app.js',

	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},

  	module: {
    	rules: [

			{ 	// Install CSS Loaders
				test: /\.(css)$/, 
				exclude: /node_modules/,
				use: extractStyles.extract({
		          use: [
		            {
		              loader: 'css-loader',
		              options: { importLoaders: 1 },
		            },
		            'postcss-loader',
		          ],
		        }),
			},

			{ 	// Install URL Loader
				test: /\.(svg|gif|png|eot|woff|ttf)$/,
				use: ['url-loader']
			},

			{ 	// Babel es2015 
				test: /\.js$/,
				use: ['babel-loader?presets[]=es2015']
			}
		]
  	},
  	plugins: [
		extractStyles,	
	],
};

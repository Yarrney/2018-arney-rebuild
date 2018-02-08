module.exports = {
	entry: './src/js/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},

  	module: {
    	rules: [

			{ 	// Install CSS Loaders
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'sass-loader',
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
			},

			{ 	// Install URL Loader
				test: /\.(svg|gif|png|eot|woff|ttf)$/,
				loaders: [
					'url-loader'
				]
			},

			{ 	// Babel es2015 
				test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015'
			}

    ]
  }

};
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
				loaders: [
				  'style-loader',
				  'css-loader',
				  'sass-loader'
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

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
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
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    }
}
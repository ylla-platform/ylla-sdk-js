module.exports = {
	entry: './lib/index.js',
	output: {
		path: __dirname,
		filename: './dist/ylla-sdk.bundle.js',
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
			{
				test: /test\.js$/,
				use: 'mocha-loader',
				exclude: /node_modules/,
			},
    ]
  }
}; 

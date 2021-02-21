const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'public')
    }, 
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.ts', '.tsx', '.json'
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 4000,
        historyApiFallback: true
    }
}
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'widget.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Widget',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};
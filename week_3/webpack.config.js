module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 7080,
        contentBase: __dirname + '/public/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: ['/node_modules/'],
                options: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    }
};
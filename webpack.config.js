const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                    includePaths: ["absolute/path/a", "absolute/path/b"]
                }
            }]
        }]
    },
    entry: {
        app: './src/js/index.js'
    },

    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};

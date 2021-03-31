const path = require('path')
module.exports = {
    mode: 'development',
    devtool: 'none',
    entry: './src/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    }
}
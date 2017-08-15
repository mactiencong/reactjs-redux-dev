module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "./app/assets/js/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ["es2015","react","stage-0"]    
                }
            } 
        ]
    }
};
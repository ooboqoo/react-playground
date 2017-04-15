var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "dist/bundle.js",
        path: __dirname
    },

    devtool: "source-map",

    devServer: {
      historyApiFallback: true,
      stats: {chunks: false,}
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {test: /\.tsx?$/, use: "awesome-typescript-loader"},
            {test: /\.scss$/, use: ExtractTextPlugin.extract({use: ['css-loader', 'sass-loader']})}
        ],
    },

    plugins: [
        new ExtractTextPlugin('dist/style.css')
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

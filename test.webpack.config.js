const path = require("path");

module.exports = {
    entry: './app/test/unit/index.spec.ts',
    output: {
        path: path.join(__dirname, "test/unit"),
        filename: "[name].js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "babel-loader",
                    "ts-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [

    ]
};

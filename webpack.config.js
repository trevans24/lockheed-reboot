"use strict";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const prod = process.env.REACT_APP_NODE_ENV === "production";

module.exports = {
	mode: prod ? "production" : "development",
	devtool: prod ? undefined : "source-map",
	// file for webpack to watch
	entry: "./src/index.tsx",

	// where to output the bundled js
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
	},

	// loaders or compilers
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				loader: "esbuild-loader",
				options: {
					target: "esnext",
					jsx: "automatic",
				},
				resolve: {
					extensions: [".ts", ".tsx", ".js", ".json"],
				},
			},
			{
				test: /\.(s*)css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.jpeg$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.jpg$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "src/assets/img",
					},
				},
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		host: "0.0.0.0",
		port: 3000,
	},
	// performance: {
	//   hints: process.env.NODE_ENV === 'production' ? "warning" : false
	// },
	plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};

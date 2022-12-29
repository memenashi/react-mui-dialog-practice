import { join, resolve as _resolve } from "path";

export const mode = "development";
export const entry = "./src/index.tsx";
export const output = {
  path: join(__dirname, "public"),
  filename: "main.js",
};
export const module = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/react"] },
        },
        {
          loader: "ts-loader",
          options: {
            configFile: _resolve(__dirname, "tsconfig.json"),
          },
        },
      ],
    },
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  ],
};
export const devServer = {
  static: {
    directory: join(__dirname, "public"),
  },
  port: 3000,
};
export const resolve = {
  extensions: [".ts", ".tsx", ".js", ".json"],
};
export const target = "web";

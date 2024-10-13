import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

import "webpack-dev-server";

export const developmentConfig = (
  templateSource: string,
  componentsSource: string
): Configuration => {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: templateSource,
      }),
      new ReactRefreshWebpackPlugin(),
    ],
    devServer: {
      port: 7000,
      historyApiFallback: true,
      liveReload: false,
    },
    resolve: {
      alias: {
        "@": componentsSource,
      },
    },
    devtool: "eval-source-map",
  };
};

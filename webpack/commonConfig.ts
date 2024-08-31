import { Configuration } from 'webpack';

export const commonConfig = (
  entryPath: string,
  outputPath: string
): Configuration => {
  return {
    entry: { index: entryPath },
    output: {
      path: outputPath,
      filename: '[name].js',
    },
    module: {
      rules: [
        { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' }, 
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  };
};

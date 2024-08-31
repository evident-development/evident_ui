import { Configuration, ProvidePlugin } from 'webpack';

export const productionConfig = (): Configuration => {
  return {
    output: {
      libraryTarget: 'umd',
      library: 'evident-ui',
      umdNamedDefine: true,
    },
    externals: ['react', 'react-dom'],
    plugins: [new ProvidePlugin({ React: 'react' })],
  };
};

const NODE_ENV = process.env.NODE_ENV;
const dotenv = require('dotenv');

const getConfig = require('hjs-webpack');

const isDev  = NODE_ENV === 'development';
const isTest = NODE_ENV === 'test';


var config = getConfig({
  isDev: isDev,
  in: 'src/index.tsx',
  out: 'public',
  html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        title: 'React Typescript Sample',
        publicPath: isDev ? 'http://localhost:3000/' : '',
        meta: {
          'name': 'AWS Toolchest',
          'description': 'A chest filled with various AWS tools.'
        }
      })
    }
  }
});

// workaround see https://github.com/HenrikJoreteg/hjs-webpack/issues/227
var tsLoaderConfig = config.module.loaders.find(loaderConfig =>
  loaderConfig.loaders && loaderConfig.loaders[0] === 'awesome-typescript-loader'
);

tsLoaderConfig.loaders = [
    'react-hot',
    'awesome-typescript-loader'
  ];

config.resolve.extensions = config.resolve.extensions.concat(['.ts', '.tsx']);
// end workaround

module.exports = config;

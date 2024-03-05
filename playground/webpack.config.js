/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { mkcert } = require('..');
const HTML = require('html-webpack-plugin');
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = async function () {
  const cert = await mkcert();

  return {
    context: __dirname,
    mode: 'development',
    entry: './main.js',
    plugins: [
      new HTML({
        template: path.resolve(__dirname, './index.html'),
        minify: false,
        filename: 'index.html',
      }),
    ],
    devServer: {
      host: 'localhost',
      port: 3000,
      server: {
        type: 'https',
        options: cert,
      },
    },
  };
};

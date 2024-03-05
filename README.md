# @publishjs/dev-mkcert

Use mkcert to provide certificate support for https development services.

## Quick start

1. Installation dependencies

```sh
yarn add @publishjs/dev-mkcert -D
```

2. Configure webpack

```js
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
```

## Principle

Use [mkcert](https://github.com/FiloSottile/mkcert) to install the local `CA` certificate and generate it for [server.https](https://vitejs.bootcss.com/config/#server-https) Server certificate.

## Friendly reminder

1. Uninstall the `CA` certificate: `mkcert -uninstall`

## Thanks

- [vite-plugin-mkcert](https://github.com/liuweiGL/vite-plugin-mkcert)
- [mkcert](https://github.com/FiloSottile/mkcert)
- [daquinoaldo/https-localhost](https://github.com/daquinoaldo/https-localhost)

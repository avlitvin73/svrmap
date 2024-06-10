// projects/shell/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        'contactMap': 'contactMap@http://localhost:4201/remoteEntry.js',
        'contactDetails': 'contactDetails@http://localhost:4202/remoteEntry.js',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      },
    }),
  ],
};

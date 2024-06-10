const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "contactMap",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "contactMap",
      filename: "remoteEntry.js",
      exposes: {
        './ContactMapModule': './projects/contact-map/src/app/contact-map/contact-map.module.ts',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      },
    }),
  ],
};

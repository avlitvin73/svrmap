const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "contactDetails",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "contactDetails",
      filename: "remoteEntry.js",
      exposes: {
        './ContactDetailsModule': './projects/contact-details/src/app/contact-details/contact-details.module.ts',
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
      },
    }),
  ],
};

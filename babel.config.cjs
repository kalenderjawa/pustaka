// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: process.version.node,
          esmodules: true,
          chrome: 76,
          edge: 75,
          firefox: 69
        },
        useBuiltIns: 'entry',
        ignoreBrowserslistConfig: true
      }
    ],
    ['@babel/preset-flow']
  ]
}

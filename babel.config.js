module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          root: './src',
          assets: './assets',
          icons: './assets/icons/src',
          screens: './src/screens',
          core: './src/core',
          components: './src/components',
        },
      },
    ],
  ],
}

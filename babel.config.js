module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-class-properties', { loose: false }],
    ['@babel/plugin-transform-private-methods', { loose: false }],
    ['@babel/plugin-transform-private-property-in-object', { loose: false }],
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      allowlist: ['AUTH0_DOMAIN', 'AUTH0_CLIENT_ID'],
    }],
    
  ],
};

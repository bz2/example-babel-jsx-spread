module.exports = (api) => {
  api.cache(false);
  const plugins = [
    '@babel/plugin-transform-react-jsx',
    //['@babel/plugin-transform-runtime', {useESModules: true}],
  ];
  const presets = [
    '@babel/preset-env',
  ];
  return {plugins, presets};
};

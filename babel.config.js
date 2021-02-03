module.exports = (api) => {
  api.cache(false);
  const plugins = [
    ['@babel/plugin-transform-react-jsx', {
      runtime: 'automatic',
      importSource: 'preact',
    }],
  ];
  const presets = [
    '@babel/preset-env',
  ];
  return {plugins, presets};
};

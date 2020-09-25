module.exports = (api) => {
  api.cache(false);
  const plugins = [
    ['@babel/plugin-transform-react-jsx', {
      runtime: 'automatic',
      importSource: 'preact',
      useBuiltIns: true
    }],
    //['@babel/plugin-transform-runtime', {useESModules: true}],
  ];
  const presets = [
    [
      '@babel/preset-env',
      {
        loose: true,
        bugfixes: true,
        targets: {
          esmodules: true
        }
      }
    ]
  ];
  return {plugins, presets};
};

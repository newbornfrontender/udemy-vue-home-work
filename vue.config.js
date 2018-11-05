module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    sourceMap: false // true
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
};

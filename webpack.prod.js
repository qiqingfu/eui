module.exports = {
  mode: "production",
  // https://segmentfault.com/a/1190000012113011
  externals: {
    react: {
      root: "React", // 可以通过一个全局变量访问 library（例如，通过 script 标签）
      commonjs: "react", // 可以将 library 作为一个 CommonJS 模块访问
      commonjs2: "react", // 和上面的类似，但导出的是 module.exports.default
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
    },
  },
};

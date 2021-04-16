const Compiler = require('./Compiler')
const NodeEnvironmentPlugin = require('./node/NodeEnvironmentPlugin')

const webpack = function(options) {
  // 01 实例化 compiler 对象
  const compiler = new Compiler(options.context)
  compiler.options = options

  // 02 初始化 NodeEnvironmentPlugin（让compiler具备文件读写能力）
  new NodeEnvironmentPlugin().apply(compiler)

  // 03 挂载所有 plugins 插件到 compiler 对象上
  if (options.plugins && Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      plugin.apply(compiler) // 所有的webpack插件都会暴露一个apply方法
    }
  }

  // 04 挂载所有 webpack 内置的插件（入口）
  // compiler.options = new WebpackOptionsApply().process(options, compiler);

  // 05 返回 compiler 对象即可
  return compiler
}

module.exports = webpack

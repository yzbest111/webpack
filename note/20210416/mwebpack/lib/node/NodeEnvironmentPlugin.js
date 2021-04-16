const fs = require('fs')

class NodeEnvironmentPlugin {
  constructor(options) {
    this.options = options || {}
  }

  apply(compiler) {
    // 往compiler上挂载操作文件的类
    compiler.inputFileSystem = fs
    compiler.outputFileSystem = fs
  }
}

module.exports = NodeEnvironmentPlugin

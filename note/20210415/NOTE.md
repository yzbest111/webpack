- npx webpack这个动作可以分解为run.js的过程
- node_modules/webpack/bin/webpack.js的核心操作就是加载node_modules/webpack-cli/bin/cli.js，其源码如下：
```javascript
else if (installedClis.length === 1) {
	const path = require("path");
	const pkgPath = require.resolve(`${installedClis[0].package}/package.json`);
	// eslint-disable-next-line node/no-missing-require
	const pkg = require(pkgPath);
	// eslint-disable-next-line node/no-missing-require
	require(path.resolve(
		path.dirname(pkgPath),
		pkg.bin[installedClis[0].binName]
	));
}
```
- cli.js
    * 当前文件一般有两个操作，处理参数，将参数交给不同的逻辑（分发业务）

    * options
    ```javascript
        // 引入options(webpack配置文件：webpack.config.js) 71行
        let options = require("./utils/convert-argv")(argv)

        // 处理options，将参数交给不同的逻辑 125行
        function processOptions(options) {
            ...
        }

    ```

    * 生成compiler(270行)
    ```javascript
        let compiler = webpack(options)
    ```

    * compiler.run(353行)
    ```javascript
        compiler.run((err, stats) => {
            if (compiler.close) {
                compiler.close(err2 => {
                    compilerCallback(err || err2, stats);
                });
            } else {
                compilerCallback(err, stats);
            }
        });
    ```
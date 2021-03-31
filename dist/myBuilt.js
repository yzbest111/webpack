(function(modules) {
  // 01 定义一个对象用于缓存已经被加载过的模块
  let installedModules = {}

  // 02 定义一个__webpack_require__方法来替换 import require 加载操作
  function __webpack_require__(moduleId) {
    // 2-1 判断当前缓存中是否存在要被加载的模块，如果存在，则直接返回
    if (installedModules[moduleId]) {
      return installedModules[moduleId]
    }

    // 2-2 如果当前缓存中不存在，则定义需缓存的数据
    let module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    }

    // 2-3 调用当前 moduleId对应的 value，然后完成内容加载
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)

    // 2-4 当上述方法调用成功后，修改l的值，表示当前模块已经加载完成
    module.l = true

    // 返回当前模块的数据
    return module.exports
  }

  // 03 __webpack_require__函数上定义一个私有属性 m，用于保存 modules
  __webpack_require__.m = modules

  // 04 __webpack_require__函数上定义一个私有属性 c，用于保存cache
  __webpack_require__.c = installedModules

  // 05 __webpack_require__函数上定义一个私有方法 o，用于判断对象上是否存在指定的属性
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }

  // 06 __webpack_require__函数上定义一个私有方法 d，用于在对象上添加指定的属性，同时给该属性提供一个getter函数
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      })
    }
  }

  // 07 __webpack_require__函数上定义一个私有方法 r，用于标识当前模块是 ES Module
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      })
    }
    Object.defineProperty(exports, '__esModule', {
      value: true
    })
  }

  // 08 __webpack_require__函数上定义私有方法 n，用于设置具体的getter函数
  __webpack_require__.n = function(module) {
    let getter = module && module.__esModule ?
        function getDefault() { return module['default'] } :
        function getModuleExports() { return module }

    __webpack_require__.d(getter, 'a', getter)
  }

  // 11 __webpack_require__函数上定义私有方法 t，用于加载指定 value 的模块内容，之后对内容进行处理再返回
  __webpack_require__.t = function(value, mode) {
    // 01 加载value对应的模块（value 一般是模块id）
    // 加载之后内容又重新赋值给 value
    if (mode & 1) {
      value = __webpack_require__(value)
    }
    if (mode & 8) {
      return value
    }
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) {
      return value
    }

    // 如果8和4都没有成立，则需要自定义 ns 来通过 default 属性返回
    let ns = Object.create(null) // 定义一个空对象
    __webpack_require__.r(ns) // 标识 ns 对象是ES Module类型
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    })

    if (mode & 2 && typeof value !== 'string') {
      for (var key in value) {
        // ns对象上定义key属性的getter函数
        __webpack_require__.d(ns, key, function(key) {
          return value[key]
        }.bind(null, key))
      }
    }

    return ns
  }

  // 09 定义 P 属性，用于保存资源访问路径
  __webpack_require__.p = ''

  // 10 调用__webpack_require__函数执行模块导入和加载操作
  return __webpack_require__(__webpack_require__.s="./src/main.js")
})(
  // 打包的模块
  {

    "./src/login.js":
    (function(module, __webpack_exports__, __webpack_require__) {
     "use strict";
     // 用于标识当前模块是 ES Mdule类型
     __webpack_require__.r(__webpack_exports__);
     // 用于给exports对象上添加指定的属性，并添加getter函数
     __webpack_require__.d(__webpack_exports__, "age", function() { return age; });
     __webpack_exports__["default"] = ('yuzheng');
     const age = 29
    }),
    "./src/main.js":
    (function(module, __webpack_exports__, __webpack_require__) {
     "use strict";
     __webpack_require__.r(__webpack_exports__);
     var _login_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/login.js");
       console.log('程序执行了')
       console.log('age: ', _login_js__WEBPACK_IMPORTED_MODULE_0__["age"])
       console.log('name: ', _login_js__WEBPACK_IMPORTED_MODULE_0__["default"])
     })
  }
)
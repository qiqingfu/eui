# npx mrm lint-staged error

当我在执行 prettier 这个 [lint-staged](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged) 步骤时，出现如下错误。

```text
Preset “default” not found.

We’ve tried to load “mrm-preset-default” and “default” npm packages.
```

解决：运行 `npx mrm@2 lint-staged`

参考：https://stackoverflow.com/questions/67475700/npx-mrm-lint-staged-erroring-out-with-preset-default-not-found

# 通过 jest 运行指定的测试文件

```text
yarn test -- -u -t=<describe的描述名称>
```

示例，要运行 `lib/Button/__tests__/button.unit.tsx` 测试

```text
yarn test -- -u -t="Button Component"
```

# CSS BEM 规范

参考链接：https://www.zhihu.com/question/21935157/answer/267931220

- 模块：.Block
- 模块\_状态：.Block_Modifier
- 模块**子元素：.Block**Element
- 模块**子元素\_状态：.Block**Element_Modifier

# TsConfig.json path

- 在 TS 模块中使用绝对路径导入模块失败

```json
Module not found: Error: Can't resolve 'lib/_util/index' in 'E:\eui\lib\Modal'
resolve 'lib/_util/index' in 'E:\eui\lib\Modal'
  Parsed request is a module
  using description file: E:\eui\package.json (relative path: ./lib/Modal)
    Field 'browser' doesn't contain a valid alias configuration
    resolve as module
      E:\eui\lib\Modal\node_modules doesn't exist or is not a directory
      E:\eui\lib\node_modules doesn't exist or is not a directory
      looking for modules in E:\eui\node_modules
        E:\eui\node_modules\lib doesn't exist
      E:\node_modules doesn't exist or is not a directory
 @ ./lib/Modal/index.tsx 1:0-28 2:15-20
 @ ./lib/index.tsx 3:0-28 4:0-31
 @ ./demo/App.tsx 3:0-45 17:32-38 18:32-38 19:32-37
 @ ./demo/index.tsx 4:0-24 5:36-39
```

# toString.call(Generator) 在 JavaScript 和 TypeScript 下得到的结果不同?

在我实现 Type 判断类型的工具函数时，在 TS 代码中使用 Object.prototype.toString.call(function \* gen() {}) 代码时, 期望得到 `[object GeneratorFunction]`，结果却得到 `[object Function]`，但是在 JavaScript 中没问题。

## Enzyme shallow 和 mount 的区别

- shallow 浅层渲染组件，不会渲染当前组件中的子组件，所以不能再该组件中给子组件绑定事件

- mount 完整的渲染组件，包括该组件中使用的子组件，因此可以测试子组件的事件绑定

## TypeError: parentInstance.children.indexOf is not a function

问题描述：

当编写 Modal 组件时，使用 ReactDOM.createPortal 将 Node 传送到别的位置时，在编写 Modal 组件的 Jest 快照时就会报以上错误。

目前通过谷歌找到一个相关问题的 issues，https://github.com/reactjs/react-modal/issues/553。等解决这个问题后再更新这块的描述。

**占空**

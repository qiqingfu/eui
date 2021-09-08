## npx mrm lint-staged error

当我在执行 prettier 这个 [lint-staged](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged) 步骤时，出现如下错误。

```text
Preset “default” not found.

We’ve tried to load “mrm-preset-default” and “default” npm packages.
```

解决：运行 `npx mrm@2 lint-staged`

参考：https://stackoverflow.com/questions/67475700/npx-mrm-lint-staged-erroring-out-with-preset-default-not-found

## 通过 jest 运行指定的测试文件

```text
yarn test -- -u -t=<describe的描述名称>
```

示例，要运行 `lib/Button/__tests__/button.unit.tsx` 测试

```text
yarn test -- -u -t="Button Component"
```

## CSS BEM 规范

参考链接：https://www.zhihu.com/question/21935157/answer/267931220

- 模块：.Block
- 模块\_状态：.Block_Modifier
- 模块**子元素：.Block**Element
- 模块**子元素\_状态：.Block**Element_Modifier

## npx mrm lint-staged error

当我在执行 prettier 这个 [lint-staged](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged) 步骤时，出现如下错误。

```text
Preset “default” not found.

We’ve tried to load “mrm-preset-default” and “default” npm packages.
```

解决：运行 `npx mrm@2 lint-staged`

参考：https://stackoverflow.com/questions/67475700/npx-mrm-lint-staged-erroring-out-with-preset-default-not-found

# 开发日志

## 2021/09/07

- 创建 Modal 组件目录结构，确定部分 props 接口
- 一个必选的 visible props
- 新增 onCancel props 关闭的回调函数。范围：取消按钮、遮罩层
- 新增 maskClosable props，点击遮罩层是否关闭, 默认设置为 true
- 进行 Modal 组件的 CSS 样式编写
- 新增 props closable 属性，是否显示右上角关闭按钮
- Footer 部分默认显示取消和确认按钮
  - 点击取消按钮时, 触发 onCancel 函数
  - 点击确认时, 触发 onOk 函数

## 2021/09/08

- BEM 布局优化
- 创建了 \_util 目录，新增了 Type 公用函数用于校验值的类型
  - 添加 TS TupleToUnion 类型工具，用于将元组类型转成联合类型
  - 计划将其抽成一个 npm 包工具
- 创建 **tests** 单元测试目录
- 需要编写 Modal 已开发功能的单元测试

## 2021/09/12

- mask 是否显示遮罩层
- 支持自定义 footer

## 2021/09/13

- props.footer 测试用例编写
- 处理 zIndex 层级问题, 通过 ReactDOM.createPortal() 解决
- 支持用户自定义 zIndex

## 2021/09/21

- Modal 生成快照错误处理
- 支持 title props 自定义 Modal 的标题内容

## 待完成

- Modal 生成快照报错处理
- 提供 API 调用的方式
  - alert
  - confirm

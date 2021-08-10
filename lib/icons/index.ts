/**
 * 需要编译一个自定义的声明文件, 让编译器跳过对 svg 模块的类型检查
 * 外部模块声明只能在模块的顶层定义, 并且存在于全局命名空间当中
 *
 * Example:
 *  declare module 'io' {
 *    export function readFile (filename: string): string
 *  }
 */

import "./delete.svg"
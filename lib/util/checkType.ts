/**
 * 基本数据类型
 *  - Number
 *  - String
 *  - Boolean
 *  - Null
 *  - Undefined
 *  - Symbol
 *
 * 复杂数据类型
 *  - Object
 *  - Array
 *  - Function
 *  - Promise
 *  - GeneratorFunction
 *  - Date - new Date
 */

import { TupleToUnion } from './type';

type Types = [
  'Number',
  'String',
  'Boolean',
  'Null',
  'Undefined',
  'Symbol',
  'Object',
  'Array',
  'Function',
  'Promise',
  'GeneratorFunction',
  'Date',
];

type Result = Record<TupleToUnion<Types>, (val: unknown) => boolean>;

const toString = Object.prototype.toString;

const Type = (() => {
  const types: Types = [
    'Number',
    'String',
    'Boolean',
    'Null',
    'Undefined',
    'Symbol',
    'Object',
    'Array',
    'Function',
    'Promise',
    'GeneratorFunction',
    'Date',
  ];

  const result: Result = {} as Result;

  for (let i = 0; i < types.length; i++) {
    const type = types[i];
    result[type] = (val: unknown) => {
      const [, valType] = toString.call(val).match(/^\[object\s+(\w+)]$/);

      return valType === type;
    };
  }

  return result;
})();

export default Type;

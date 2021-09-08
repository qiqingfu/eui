import { Type } from '../index';

describe('Type', () => {
  it('Check Number type', () => {
    expect(Type.Number(1)).toBeTruthy();
  });

  it('Check String type', () => {
    expect(Type.String('eui')).toBeTruthy();
  });

  it('Check Boolean type', () => {
    expect(Type.Boolean(false)).toBeTruthy();
  });

  it('Check Null type', () => {
    expect(Type.Null(null)).toBeTruthy();
  });

  it('Check Undefined type', () => {
    expect(Type.Undefined(undefined)).toBeTruthy();
  });

  it('Check Symbol type', () => {
    expect(Type.Symbol(Symbol())).toBeTruthy();
  });

  it('Check Object type', () => {
    expect(Type.Object({})).toBeTruthy();
  });

  it('Check Array type', () => {
    expect(Type.Array([])).toBeTruthy();
  });

  it('Check Function type', () => {
    const fn = jest.fn();
    expect(Type.Function(fn)).toBeTruthy();
  });

  it('Check Promise type', () => {
    const promise = Promise.resolve(1);
    expect(Type.Promise(promise)).toBeTruthy();
  });

  it('Check Date type', () => {
    const date = new Date();
    expect(Type.Date(date)).toBeTruthy();
  });
});

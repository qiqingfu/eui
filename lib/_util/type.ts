export type TupleToUnion<T extends unknown[]> = T extends [infer A, ...infer B]
  ? A | TupleToUnion<B>
  : never;

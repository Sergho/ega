export interface IVector<T> {
  readonly size: number;
  pop(): void;
  push(value: T): void;
  set(index: number, value: T): void;
  get(index: number): T;
  clear(size: number);
  print(): void;
  toList(): T[];
}

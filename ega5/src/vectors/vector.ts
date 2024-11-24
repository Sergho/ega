import { VECTOR_ERRORS } from '../constants/exceptions';
import { IVector } from './vector.interface';

export class Vector<T> implements IVector<T>, Iterable<T> {
  protected _size: number;
  protected _data: T[];
  public get size(): number {
    return this._size;
  }
  public constructor(data?: T[]) {
    if (!data) {
      this._data = [null];
      this._size = 1;
    } else {
      this._data = data;
      this._size = this.checkSize();
    }
  }
  public clear(size: number) {
    this._size = size;
    for (let i = 0; i < size; i++) {
      this._data[i] = null;
    }
  }
  public [Symbol.iterator](): Iterator<T> {
    let counter = 0;
    return {
      next: () => {
        return {
          done: counter >= this._size,
          value: this._data[counter++],
        };
      },
    };
  }
  public set(index: number, value: T): void {
    if (index >= this._size || index < 0) throw VECTOR_ERRORS.INCORRECT_INDEX;
    this._data[index] = value;
  }
  public get(index: number): T {
    if (index >= this._size || index < 0) throw VECTOR_ERRORS.INCORRECT_INDEX;
    return this._data[index];
  }
  public push(value: T): void {
    this._data[this._size] = value;
    this._size++;
  }
  public pop(): void {
    if (this._size < 1) throw VECTOR_ERRORS.INCORRECT_SIZE;
    this._size--;
  }
  public print() {
    console.log(this._data.toString());
  }
  private checkSize(): number {
    if (this._data.length === 0) throw VECTOR_ERRORS.INCORRECT_SIZE;
    return this._data.length;
  }
}

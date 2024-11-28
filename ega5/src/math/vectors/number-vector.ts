import { VECTOR_ERRORS } from '../../constants/exceptions';
import { Vector } from './vector';
import { IVector } from './vector.interface';

export class NumberVector extends Vector<number> {
  public constructor(data?: number[]) {
    super(data);
  }
  public max(): number {
    return Math.max(...this._data);
  }
  public add(operand: IVector<number>): void {
    if (this._size !== operand.size) throw VECTOR_ERRORS.INCORRECT_SIZE;

    for (let i = 0; i < this._size; i++) {
      this._data[i] += operand.get(i);
    }
  }
}

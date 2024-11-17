import { PERMUTATION_ERRORS } from '../constants/exceptions';
import { NumberVector } from '../vectors/number-vector';

export class NumberPermutation extends NumberVector {
  public constructor(data?: number[]) {
    super();
    if (!data) this._data = [1];
    else {
      this._data = data;
      this.checkStructure();
    }
  }
  private checkStructure() {
    const set = new Set();
    for (const value of this._data) {
      if (value > this._data.length)
        throw PERMUTATION_ERRORS.INCORRECT_STRUCTURE;
      set.add(value);
    }
    if (set.size !== this._data.length)
      throw PERMUTATION_ERRORS.INCORRECT_STRUCTURE;

    this._size = this._data.length;
  }
}

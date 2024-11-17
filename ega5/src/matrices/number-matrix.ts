import { NumberVector } from '../vectors/number-vector';
import { IVector } from '../vectors/vector.interface';
import { Matrix } from './matrix';

export class NumberMatrix extends Matrix<number> {
  public constructor(data?: IVector<number>[]) {
    super(data);
  }
}

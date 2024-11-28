import { NumberMatrix } from '../../math/matrices/number-matrix';
import { NumberVector } from '../../math/vectors/number-vector';

export interface InputDto {
  executionTimes: NumberMatrix;
  fines: NumberVector;
  deadlines: NumberVector;
}

import { NumberMatrix } from '../../matrices/number-matrix';
import { NumberVector } from '../../vectors/number-vector';

export interface InputDto {
  executionTimes: NumberMatrix;
  fines: NumberVector;
  deadlines: NumberVector;
}

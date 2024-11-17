import { NumberMatrix } from '../matrices/number-matrix';
import { NumberVector } from '../vectors/number-vector';

export class EstimatorOptions {
  startTimes: NumberMatrix;
  executionTimes: NumberMatrix;
  fines: NumberVector;
  deadlines: NumberVector;
}
export interface IEstimator {
  estimate(args: EstimatorOptions): number;
}

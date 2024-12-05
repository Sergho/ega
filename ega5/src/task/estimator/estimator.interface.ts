import { NumberMatrix } from '../../math/matrices/number-matrix';
import { NumberVector } from '../../math/vectors/number-vector';

export interface EstimatorOptions {
  startTimes: NumberMatrix;
  executionTimes: NumberMatrix;
  fines: NumberVector;
  deadlines: NumberVector;
}
export interface IEstimator {
  estimate(args: EstimatorOptions): number;
}

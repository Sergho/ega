import { ESTIMATOR_ERROR } from '../constants/exceptions';
import { EstimatorOptions, IEstimator } from './estimator.interface';
import { NumberVector } from '../vectors/number-vector';

export class Estimator implements IEstimator {
  public constructor() {}
  public estimate(options: EstimatorOptions): number {
    this.checkSizes(options);

    const { startTimes, executionTimes, fines, deadlines } = options;

    let fine = 0;
    for (let i = 0; i < startTimes.rowsCount; i++) {
      let vector = new NumberVector();
      Object.assign(vector, startTimes.getRow(i));
      vector.add(executionTimes.getRow(i));

      const max = vector.max();

      fine += fines.get(i) * Math.max(0, max - deadlines.get(i));
    }

    return fine;
  }
  private checkSizes(options: EstimatorOptions): void {
    // TODO Create special size vectors. Not check that here
    const { startTimes, executionTimes, fines, deadlines } = options;

    if (startTimes.rowsCount !== executionTimes.rowsCount)
      throw ESTIMATOR_ERROR.INCORRECT_SIZES;
    if (startTimes.colsCount !== executionTimes.colsCount)
      throw ESTIMATOR_ERROR.INCORRECT_SIZES;
    if (startTimes.rowsCount !== deadlines.size)
      throw ESTIMATOR_ERROR.INCORRECT_SIZES;
    if (startTimes.rowsCount !== fines.size)
      throw ESTIMATOR_ERROR.INCORRECT_SIZES;
  }
}

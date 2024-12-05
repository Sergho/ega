import { ESTIMATOR_ERROR } from '../../constants/exceptions';
import { NumberVector } from '../../math/vectors/number-vector';
import { EstimatorOptions, IEstimator } from './estimator.interface';

export class Estimator implements IEstimator {
  public constructor() {}
  public estimate(options: EstimatorOptions): number {
    this.checkSizes(options);

    const { startTimes, executionTimes, fines, deadlines } = options;

    let fine = 0;
    for (let i = 0; i < startTimes.rowsCount; i++) {
      let endTime = new NumberVector();
      Object.assign(endTime, startTimes.getRow(i));
      endTime.add(executionTimes.getRow(i));

      const max = endTime.max();

      fine += fines.get(i) * Math.max(0, max - deadlines.get(i));
    }

    return fine;
  }
  private checkSizes(options: EstimatorOptions): void {
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

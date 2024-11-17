import { D, F, T, X } from './src/constants/constants';
import { Estimator } from './src/estimator/estimator';
import { EstimatorOptions } from './src/estimator/estimator.interface';

const options: EstimatorOptions = {
  startTimes: X,
  executionTimes: T,
  fines: F,
  deadlines: D,
};

const estimator = new Estimator();
const result = estimator.estimate(options);
console.log(result);

import { D, F, Q, T, X } from './src/constants/constants';
import { Estimator } from './src/estimator/estimator';
import { EstimatorOptions } from './src/estimator/estimator.interface';
import { Simulation } from './src/simulation/simulation';
import { Vector } from './src/vectors/vector';

const simulation = new Simulation();
const simulationResult = simulation.simulate({ queue: Q, executionTimes: T });
for (const row of simulationResult) {
  for (const value of row as Vector<number>) {
    process.stdout.write(value + ', ');
  }
  process.stdout.write('\n');
}

const options: EstimatorOptions = {
  startTimes: simulationResult,
  executionTimes: T,
  fines: F,
  deadlines: D,
};

const estimator = new Estimator();
const result = estimator.estimate(options);
console.log(result);

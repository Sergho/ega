import { D, F, Q, T } from './src/constants/constants';
import { InputDto } from './src/data-sources/dto/input.dto';
import { Individual } from './src/ega/individual/individual';
import { Estimator } from './src/estimator/estimator';
import { Simulation } from './src/simulation/simulation';

const inputs: InputDto = {
  executionTimes: T,
  fines: F,
  deadlines: D,
};
const code = Q;
const individual = new Individual(code, {
  simulation: new Simulation(),
  estimator: new Estimator(),
  inputs,
});
console.log(individual.code, individual.fitness());

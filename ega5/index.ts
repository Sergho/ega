import {
  D,
  EGA_STRATEGIES,
  ESTIMATOR,
  F,
  SIMULATION,
  START_POPULATION_SIZE,
  T,
} from './src/constants/constants';
import { InputDto } from './src/data-sources/dto/input.dto';
import { EGA } from './src/ega/ega';
import { Individual } from './src/ega/individual/individual';
import { NumberPermutation } from './src/permutations/number-permutation';
import { Simulation } from './src/simulation/simulation';

const inputs: InputDto = {
  executionTimes: T,
  fines: F,
  deadlines: D,
};

const ega = new EGA(inputs, EGA_STRATEGIES);
ega.createPopulation(START_POPULATION_SIZE);
const parents = ega.selectParents();
const children = ega.crossover(parents);
console.log('parents');
for (const pair of parents) {
  pair.first.code.print();
  pair.second.code.print();
  console.log('');
}
console.log('children');
for (const child of children) {
  child.code.print();
}

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
console.log('children');
for (const child of children) {
  child.code.print();
}
const mutated = ega.mutation(children);
console.log('mutated');
for (const child of mutated) {
  child.code.print();
}

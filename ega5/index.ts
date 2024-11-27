import { D, EGA_STRATEGIES, F, T } from './src/constants/constants';
import { InputDto } from './src/data-sources/dto/input.dto';
import { EGA } from './src/ega/ega';

const inputs: InputDto = {
  executionTimes: T,
  fines: F,
  deadlines: D,
};

const ega = new EGA(inputs, EGA_STRATEGIES);
ega.createPopulation();
const parents = ega.selectParents();
const children = ega.crossover(parents);
const mutated = ega.mutation(children);
console.log('Start population');
for (const individual of ega._population) {
  console.log(individual.fitness());
}
ega.selection(mutated);
console.log('New population');
for (const individual of ega._population) {
  console.log(individual.fitness());
}

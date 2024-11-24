import {
  D,
  EGA_STRATEGIES,
  F,
  START_POPULATION_SIZE,
  T,
} from './src/constants/constants';
import { InputDto } from './src/data-sources/dto/input.dto';
import { EGA } from './src/ega/ega';

const inputs: InputDto = {
  executionTimes: T,
  fines: F,
  deadlines: D,
};

const ega = new EGA(inputs, EGA_STRATEGIES);
ega.createPopulation(START_POPULATION_SIZE);
for (const pair of ega.selectParents()) {
  console.log({
    first: pair.first.fitness(),
    second: pair.second.fitness(),
  });
}

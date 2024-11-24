import { D, F, Q, START_POPULATION_SIZE, T } from './src/constants/constants';
import { InputDto } from './src/data-sources/dto/input.dto';
import { EGA } from './src/ega/ega';
import { Individual } from './src/ega/individual/individual';
import { Estimator } from './src/estimator/estimator';
import { Simulation } from './src/simulation/simulation';

const inputs: InputDto = {
  executionTimes: T,
  fines: F,
  deadlines: D,
};

const ega = new EGA(inputs);
ega.createPopulation(START_POPULATION_SIZE);
for (const individual of ega.population) {
  console.log(individual.code, individual.fitness());
}

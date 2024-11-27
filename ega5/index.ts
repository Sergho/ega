import {
  D,
  EGA_STRATEGIES,
  F,
  GENERATIONS_COUNT,
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
let iteration = 0;
while (iteration < GENERATIONS_COUNT) {
  const data = ega.iteration();
  iteration = data.index;
  console.log(`Population: #${data.index}, Min: ${data.min}, Avg: ${data.avg}`);
}

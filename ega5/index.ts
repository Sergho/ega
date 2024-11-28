import { EGA_STRATEGIES, GENERATIONS_COUNT } from './src/constants/constants';
import { FileDataSource } from './src/data-sources/file-data-source';
import { EGA } from './src/ega/ega';

const dataSource = new FileDataSource('ega5/input.txt');
const ega = new EGA(dataSource.launch(), EGA_STRATEGIES);
let iteration = 0;
while (iteration < GENERATIONS_COUNT) {
  const data = ega.iteration();
  iteration = data.index;
  console.log(`Population: #${data.index}, Min: ${data.min}, Avg: ${data.avg}`);
}

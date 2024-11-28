import {
  EGA_STRATEGIES,
  GENERATIONS_COUNT,
  INPUT_FILENAME,
  OUTPUT_FILENAME,
} from './constants/constants';
import { FileDataSource } from './data-sources/file-data-source';
import { EGA } from './ega/ega';
import { FileReader } from './readers/file-reader';
import { FileSaver } from './savers/file-saver';

export class App {
  public constructor() {}
  public run() {
    const dataSource = new FileDataSource(INPUT_FILENAME);
    const ega = new EGA(dataSource.launch(), EGA_STRATEGIES);
    let iteration = 0;
    while (iteration < GENERATIONS_COUNT) {
      const data = ega.iteration();
      iteration = data.index;
      console.log(
        `Population: #${data.index}, Min: ${data.min}, Avg: ${data.avg}`
      );
    }
    this.printBest(ega);
    this.saveBest(ega);
  }
  public getBest() {
    const reader = new FileReader(OUTPUT_FILENAME);
    return reader.read();
  }
  private printBest(ega: EGA) {
    console.log('Best result:');
    ega.best().print();
  }
  private saveBest(ega: EGA) {
    const saver = new FileSaver(OUTPUT_FILENAME);
    saver.save(ega.best().code);
  }
}

import { start } from 'repl';
import {
  EGA_STRATEGIES,
  ESTIMATOR,
  GENERATIONS_COUNT,
  INPUT_FILENAME,
  OUTPUT_FILENAME,
  SIMULATION,
} from './constants/constants';
import { InputDto } from './data-sources/dto/input.dto';
import { FileDataSource } from './data-sources/file-data-source';
import { FileReader } from './data-sources/readers/file-reader';
import { FileSaver } from './data-sources/savers/file-saver';
import { EGA } from './ega/ega';
import { NumberPermutation } from './math/permutations/number-permutation';

export class App {
  private _inputs: InputDto;
  public constructor() {}
  public run() {
    const dataSource = new FileDataSource(INPUT_FILENAME);
    this._inputs = dataSource.launch();
    const ega = new EGA(this._inputs, EGA_STRATEGIES);
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
  public getBest(): {
    code: number[];
    startTimes: number[][];
    executionTimes: number[][];
  } {
    const reader = new FileReader(OUTPUT_FILENAME);
    const code = reader.read();
    return {
      code,
      startTimes: SIMULATION.simulate({
        queue: new NumberPermutation(code),
        executionTimes: this._inputs.executionTimes,
      }).toList(),
      executionTimes: this._inputs.executionTimes.toList(),
    };
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

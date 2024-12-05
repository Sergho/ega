import { NumberMatrix } from '../math/matrices/number-matrix';
import { NumberVector } from '../math/vectors/number-vector';
import { IDataSource } from './data-source.interface';
import { InputDto } from './dto/input.dto';
import * as fs from 'fs';

export class FileDataSource implements IDataSource {
  private _filename: string;
  public constructor(filename: string) {
    this._filename = filename;
  }
  public launch(): InputDto {
    const lines = fs.readFileSync(this._filename).toString().split('\n');
    const [machinesCount, detailsCount] = lines[0].split(' ').map((n) => +n);

    const machinesTimes = [];
    for (let i = 0; i < machinesCount; i++) {
      machinesTimes.push(lines[i + 1].split(' ').map((n) => +n));
    }

    const deadlines = lines[lines.length - 1].split(' ').map((n) => +n);

    const executionTimes = [];
    for (let i = 0; i < detailsCount; i++) {
      executionTimes[i] = [];
      for (let j = 0; j < machinesCount; j++) {
        executionTimes[i].push(machinesTimes[j][i]);
      }
    }

    return {
      executionTimes: new NumberMatrix(
        executionTimes.map((list) => new NumberVector(list))
      ),
      fines: new NumberVector(new Array(deadlines.length).fill(1)),
      deadlines: new NumberVector(deadlines),
    };
  }
}

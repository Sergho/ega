import { NumberPermutation } from '../../math/permutations/number-permutation';
import { ISaver } from './saver.interface';
import * as fs from 'fs';

export class FileSaver implements ISaver {
  private _filename: string;
  public constructor(filename: string) {
    this._filename = filename;
  }
  public save(queue: NumberPermutation): void {
    const list: number[] = [];
    for (const item of queue) {
      list.push(item);
    }
    fs.writeFileSync(this._filename, list.join(' '));
  }
}

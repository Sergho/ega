import { IReader } from './reader.interface';
import * as fs from 'fs';

export class FileReader implements IReader {
  private _filename: string;
  public constructor(filename: string) {
    this._filename = filename;
  }
  public read(): number[] {
    const data = fs.readFileSync(this._filename).toString();
    return data.split(' ').map((n) => +n);
  }
}

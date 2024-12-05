import { ITree } from '../tree/tree.interface';

export interface IFileReader {
  read(): ITree;
}

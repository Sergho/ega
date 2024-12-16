import { ITree } from '../tree/tree.interface';
import { NodeDto } from './file-reader';

export interface IFileReader {
  read(): NodeDto[];
  buildTree(): ITree;
}

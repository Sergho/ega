import { INode } from './node/node.interface';
import { OptimizerResult } from './optimizer/optimizer';

export interface ITree {
  get root(): INode;
  getNodes(): INode[];
  getLeaves(): INode[];
  getPath(leaf: INode): INode[];
  info(): string;
  isCompatible(): boolean;
  removeLeaf(leaf: INode): void;
  reduced(): ITree;
  optimized(): OptimizerResult[];
}

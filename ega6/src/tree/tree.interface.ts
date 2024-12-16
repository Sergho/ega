import { INode } from './node/node.interface';

export interface ITree {
  get root(): INode;
  getNodes(): INode[];
  getLeaves(): INode[];
  getPath(leaf: INode): INode[];
  info(): string;
  isCompatible(): boolean;
  removeLeaf(leaf: INode): void;
  reduced(): ITree;
  optimal(): { index: number; value: number }[];
  optimum(): number;
}

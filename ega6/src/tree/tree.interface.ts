import { INode } from './node/node.interface';

export interface ITree {
  get root(): INode;
  info(): string;
}

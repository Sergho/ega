import { INode } from './node/node.interface';
import { ITree } from './tree.interface';

export class Tree implements ITree {
  private _root: INode;

  public get root(): INode {
    return this._root;
  }

  public constructor(root?: INode) {
    this._root = root;
  }

  public info(): string {
    let report = this._root.info();
    const subTrees = this._root.children.map((child) => new Tree(child));
    for (const subTree of subTrees) {
      report += '\n' + subTree.info();
    }

    return report;
  }
}

import { Node } from './node/node';
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
  public getNodes(): INode[] {
    const nodes: INode[] = [this._root];
    const subTrees = this._root.children.map((child) => new Tree(child));
    for (const subTree of subTrees) {
      nodes.push(...subTree.getNodes());
    }
    return nodes;
  }

  public info(): string {
    const nodes = this.getNodes();

    let report = '';
    for (const node of nodes) {
      report += node.info() + '\n';
    }
    return report;
  }

  public reduced(): ITree {
    if (this._root.children.length === 0) {
      return new Tree(
        new Node({
          min: this._root.min,
          max: this._root.max,
          price: this._root.price,
          index: this._root.index,
        })
      );
    }

    const newChildren = this._root.children.map((child) => {
      const subTree = new Tree(child);
      return subTree.reduced().root;
    });

    const minSum = newChildren.reduce(
      (prev, current) => new Node({ min: prev.min + current.min, max: 0 })
    ).min;
    const maxSum = newChildren.reduce(
      (prev, current) => new Node({ min: 0, max: prev.max + current.max })
    ).max;

    const newTree = new Tree(
      new Node({
        min: Math.max(this._root.min, minSum),
        max: Math.min(this._root.max, maxSum),
        price: this._root.price,
        index: this._root.index,
      })
    );
    newTree._root.appendChildren(newChildren);
    return newTree;
  }

  public isCompatible(): boolean {
    const reduced = this.reduced();
    return reduced.root.min <= reduced.root.max;
  }
}

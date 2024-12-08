import { INode } from './node/node.interface';
import { Optimizer, OptimizerResult } from './optimizer/optimizer';
import { Reducer } from './reducer/reducer';
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
  public getLeaves(): INode[] {
    const nodes = this.getNodes();
    const leaves: INode[] = [];
    for (const node of nodes) {
      if (node.children.length === 0) leaves.push(node);
    }
    return leaves;
  }
  public getPath(leaf: INode): INode[] {
    if (!leaf.parent) return [leaf];
    return [leaf, ...this.getPath(leaf.parent)];
  }
  public removeLeaf(leaf: INode): void {
    if (leaf.children.length !== 0) return null;
    leaf.parent.removeChild(leaf);
  }
  public info(): string {
    const nodes = this.getNodes();

    let report = '';
    for (const node of nodes) {
      report += node.info() + '\n';
    }
    return report;
  }
  public isCompatible(): boolean {
    const reduced = this.reduced();
    return reduced.root.min <= reduced.root.max;
  }
  public reduced(): ITree {
    return Reducer.reduce(this);
  }
  public optimized(): OptimizerResult[] {
    return Optimizer.optimize(this);
  }
}

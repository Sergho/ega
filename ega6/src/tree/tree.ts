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

  public isCompatible(): boolean {
    const nodes = this.getNodes();
    const reducedNodes: INode[] = [];
    for (const node of nodes.reverse()) {
      const reducedNode = new Node({
        min: node.min,
        max: node.max,
        index: node.index,
      });
      const children = node.children.map((child) =>
        reducedNodes.find((node) => node.index == child.index)
      );
      reducedNode.appendChildren(children);
      reducedNodes.push(reducedNode.reduce());
    }
    for (const node of reducedNodes) {
      if (node.min > node.max) return false;
    }
    return true;
  }
}

import { Node } from '../node/node';
import { INode } from '../node/node.interface';
import { Tree } from '../tree';
import { ITree } from '../tree.interface';

export class Reducer {
  public static reduce(tree: ITree): ITree {
    if (tree.root.children.length === 0) {
      return new Tree(
        new Node({
          min: tree.root.min,
          max: tree.root.max,
          price: tree.root.price,
          index: tree.root.index,
        })
      );
    }

    const newChildren = this.reduceChildren(tree.root);

    const minSum = this.minSum(newChildren);
    const maxSum = this.maxSum(newChildren);

    const newTree = new Tree(
      new Node({
        min: Math.max(tree.root.min, minSum),
        max: Math.min(tree.root.max, maxSum),
        price: tree.root.price,
        index: tree.root.index,
      })
    );
    newTree.root.appendChildren(newChildren);
    return newTree;
  }

  private static reduceChildren(node: INode): INode[] {
    return node.children.map((child) => {
      const subTree = new Tree(child);
      return subTree.reduced().root;
    });
  }
  private static minSum(nodes: INode[]) {
    return nodes.reduce(
      (prev, current) => new Node({ min: prev.min + current.min, max: 0 })
    ).min;
  }
  private static maxSum(nodes: INode[]) {
    return nodes.reduce(
      (prev, current) => new Node({ min: 0, max: prev.max + current.max })
    ).max;
  }
}

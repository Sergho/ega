import { INode } from '../node/node.interface';
import { Tree } from '../tree';
import { ITree } from '../tree.interface';

export class Optimizer {
  public static optimize(tree: ITree): number[] {
    const clone = new Tree(tree.root.copy());
    const leaves = clone.getLeaves();

    const result: number[] = [];
    for (const leaf of this.sortLeaves(leaves)) {
      const reducedTree = clone.reduced();
      const value = this.calcValue(reducedTree, leaf);
      result[leaf.index] = value;
      this.decrementPath(clone, leaf, value);
      clone.removeLeaf(leaf);
    }
    return result;
  }
  private static sortLeaves(leaves: INode[]): INode[] {
    const sorted = [...leaves];
    sorted.sort((a, b) => b.price - a.price);
    return sorted;
  }
  private static calcValue(tree: ITree, leaf: INode): number {
    const path: INode[] = tree.getPath(leaf);

    const options = path.map((node) => node.max - this.childrenSum(node, path));
    return Math.min(...options);
  }
  private static childrenSum(node: INode, path: INode[]): number {
    if (node.children.length === 0) return 0;

    const pathIndexes = path.map((node) => node.index);
    const filtered = node.children.filter(
      (child) => !pathIndexes.includes(child.index)
    );
    const mins = filtered.map((node) => node.min);
    return mins.reduce((prev, curr) => prev + curr, 0);
  }
  private static decrementPath(tree: ITree, leaf: INode, value: number): void {
    const path = tree.getPath(leaf);
    for (const node of path) {
      node.min -= value;
      node.max -= value;
    }
  }
}

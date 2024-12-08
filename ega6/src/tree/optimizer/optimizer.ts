import { INode } from '../node/node.interface';
import { ITree } from '../tree.interface';

export interface OptimizerResult {
  index: number;
  value: number;
}
export class Optimizer {
  public static optimize(tree: ITree): OptimizerResult[] {
    const leaves = tree.getLeaves();

    const result: OptimizerResult[] = [];
    for (const leaf of this.sortLeaves(leaves)) {
      const reducedTree = tree.reduced();
      const value = this.calcValue(reducedTree, leaf);
      result.push({
        index: leaf.index,
        value,
      });
      tree.removeLeaf(leaf);
      // TODO decrement tree
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
}

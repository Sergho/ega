import { INode } from './node.interface';

export interface NodeOptions {
  index?: number;
  children?: INode[];
  parent?: INode;
}
export class Node implements INode {
  private static lastIndex = 1;

  private _index: number;
  private _children: INode[] = [];
  public parent: INode;

  public get children(): INode[] {
    return [...this._children];
  }
  public get index(): number {
    return this._index;
  }

  public constructor(options?: NodeOptions) {
    this._index = Node.lastIndex;
    Node.lastIndex++;

    if (!options) return;
    this.parent = options.parent;
    this._children = [...options.children];
  }

  public appendChildren(children: INode[]): void {
    this._children.push(...children);
    for (const child of children) {
      child.parent = this;
    }
  }

  public info(): string {
    const childrenIndexes = this._children.map((child) => child.index);
    if (childrenIndexes.length === 0) return `${this.index} - leaf`;
    return `${this.index}: ${childrenIndexes.join(', ')}`;
  }
}

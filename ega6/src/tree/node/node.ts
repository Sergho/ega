import { NODE_START_INDEX } from '../../common/constants';
import { INode } from './node.interface';

export interface NodeOptions {
  index?: number;
  children?: INode[];
  parent?: INode;
  min: number;
  max: number;
}
export class Node implements INode {
  private static lastIndex = NODE_START_INDEX;

  private _index: number;
  private _children: INode[];
  public parent: INode;

  public min: number;
  public max: number;

  public get children(): INode[] {
    return [...this._children];
  }
  public get index(): number {
    return this._index;
  }

  public constructor(options: NodeOptions) {
    this._index = Node.lastIndex;
    Node.lastIndex++;

    this.parent = options.parent;
    this._children = options.children ? [...options.children] : [];
  }

  public appendChildren(children: INode[]): void {
    this._children.push(...children);
    for (const child of children) {
      child.parent = this;
    }
  }

  public info(): string {
    const childrenIndexes = this._children.map((child) => child.index);
    if (childrenIndexes.length === 0) return `${this.index}`;
    return `${this.index}: ${childrenIndexes.join(', ')}`;
  }

  public reduce(): INode {
    if (this._children.length === 0) {
      return new Node({ min: this.min, max: this.max });
    }

    const sumMin = this._children.reduce(
      (prev, current) => new Node({ min: prev.min + current.min, max: 0 })
    ).min;
    const sumMax = this._children.reduce(
      (prev, current) => new Node({ min: 0, max: prev.max + current.max })
    ).max;

    return new Node({
      min: Math.max(this.min, sumMin),
      max: Math.min(this.max, sumMax),
    });
  }
}

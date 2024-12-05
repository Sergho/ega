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
    this._index = options.index ? options.index : 0;

    this.min = options.min;
    this.max = options.max;

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
    const span = `${this.index} [${this.min}, ${this.max}]`;
    const childrenIndexes = this._children.map((child) => child.index);
    if (childrenIndexes.length === 0) return span;
    return `${span}: ${childrenIndexes.join(', ')}`;
  }

  public reduce(): INode {
    if (this._children.length === 0) {
      return new Node({ min: this.min, max: this.max, index: this._index });
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
      index: this._index,
    });
  }
}

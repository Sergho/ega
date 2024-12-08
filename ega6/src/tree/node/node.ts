import { INode } from './node.interface';

export interface NodeOptions {
  index?: number;
  children?: INode[];
  parent?: INode;
  min: number;
  max: number;
  price?: number;
}
export class Node implements INode {
  private _index: number;
  private _children: INode[];
  public parent: INode;

  public min: number;
  public max: number;
  public price: number;

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
    this.price = options.price;

    this.parent = options.parent;
    this._children = options.children ? [...options.children] : [];
  }

  public appendChildren(children: INode[]): void {
    this._children.push(...children);
    for (const child of children) {
      child.parent = this;
    }
  }
  public removeChild(child: INode): void {
    if (!this.children.includes(child)) return;

    this._children = this.children.filter((node) => node.index !== child.index);
  }
  public info(): string {
    let span = `${this.index} [${this.min}, ${this.max}]`;
    if (this.price) span += ` - ${this.price}`;

    const childrenIndexes = this._children.map((child) => child.index);
    if (childrenIndexes.length === 0) return span;
    return `${span}: ${childrenIndexes.join(', ')}`;
  }
}

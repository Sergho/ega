import { INode } from './node.interface';

export interface NodeOptions {
  index?: number;
  children?: INode[];
  parent?: INode;
}
export class Node implements INode {
  private static lastIndex = 1;

  private _index: number;
  private _children: INode[];
  private _parent: INode;

  public get children() {
    return [...this._children];
  }
  public get parent() {
    return this._parent;
  }
  public get index() {
    return this._index;
  }

  public constructor(options: NodeOptions) {
    this._index = Node.lastIndex;
    this._parent = options.parent;
    this._children = [...options.children];

    Node.lastIndex++;
  }

  public appendChild(child: INode): void {
    this._children.push(child);
  }
}

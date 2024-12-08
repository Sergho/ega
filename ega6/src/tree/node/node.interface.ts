export interface INode {
  min: number;
  max: number;
  price: number;

  parent: INode;

  appendChildren(children: INode[]): void;
  removeChild(child: INode): void;
  get children(): INode[];
  get index(): number;

  info(): string;
}

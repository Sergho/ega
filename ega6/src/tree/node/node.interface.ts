export interface INode {
  min: number;
  max: number;

  parent: INode;

  appendChildren(children: INode[]): void;
  get children(): INode[];
  get index(): number;

  reduce(): INode;
  info(): string;
}

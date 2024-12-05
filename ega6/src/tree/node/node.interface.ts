export interface INode {
  parent: INode;

  appendChildren(children: INode[]): void;
  get children(): INode[];
  get index(): number;

  info(): string;
}

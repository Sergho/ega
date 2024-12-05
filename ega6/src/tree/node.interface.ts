export interface INode {
  appendChild(child: INode): void;
  get children(): INode[];
  get parent(): INode;
  get index(): number;
}

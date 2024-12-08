import { INPUT_FILE_EXCEPTION } from '../common/exceptions';
import { Node } from '../tree/node/node';
import { INode } from '../tree/node/node.interface';
import { Tree } from '../tree/tree';
import { ITree } from '../tree/tree.interface';
import { IFileReader } from './file-reader.interface';
import * as fs from 'fs';

export interface NodeDto {
  index: number;
  min: number;
  max: number;
  price: number;
  children: number[];
}
export class FileReader implements IFileReader {
  private _filename: string;

  public constructor(filename: string) {
    this._filename = filename;
  }
  public read(): NodeDto[] {
    const input = fs.readFileSync(this._filename, 'utf-8').toString();
    const configs = input.split('\n');

    const nodes: NodeDto[] = [];
    for (let i = 0; i < configs.length; i++) {
      const { min, max, price } = this.parseMeta(configs[i]);
      const children = this.parseChildren(configs[i]);

      if (!price && children.length === 0) throw INPUT_FILE_EXCEPTION;
      nodes.push({ index: i, min, max, price, children });
    }

    return nodes;
  }
  public buildTree(): ITree {
    const dtos = this.read();

    const nodes = this.createNodes(dtos);
    this.linkNodes(nodes, dtos);

    return new Tree(nodes[0]);
  }

  private parseChildren(config: string): number[] {
    const parts = config.split(': ');
    if (parts.length === 1) return [];

    const childrenPart = parts[1];
    return childrenPart.split(' ').map((n) => +n);
  }
  private parseMeta(config: string): {
    min: number;
    max: number;
    price: number;
  } {
    const parts = config.split(': ');
    const metaPart = parts[0];

    const meta = metaPart.split(' ').map((n) => +n);
    if (meta.length < 2 || meta.length > 3) throw INPUT_FILE_EXCEPTION;

    return {
      min: meta[0],
      max: meta[1],
      price: meta.length === 3 ? meta[2] : null,
    };
  }
  private createNodes(dtos: NodeDto[]): INode[] {
    const nodes: INode[] = [];
    for (const dto of dtos) {
      nodes.push(new Node({ ...dto, children: null }));
    }

    return nodes;
  }
  private linkNodes(nodes: INode[], dtos: NodeDto[]): void {
    for (const dto of dtos) {
      const children = nodes.filter((node) =>
        dto.children.includes(node.index)
      );
      const node = nodes.find((node) => node.index === dto.index);

      node.appendChildren(children);
    }
  }
}

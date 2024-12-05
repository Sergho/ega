import { config } from 'process';
import { INPUT_FILE_EXCEPTION } from '../../constants/exceptions';
import { Node } from '../../tree/node/node';
import { INode } from '../../tree/node/node.interface';
import { Tree } from '../../tree/tree';
import { ITree } from '../../tree/tree.interface';
import { IFileReader } from './file-reader.interface';
import * as fs from 'fs';

export class FileReader implements IFileReader {
  private _filename: string;

  public constructor(filename: string) {
    this._filename = filename;
  }
  public read(): ITree {
    const input = fs.readFileSync(this._filename, 'utf-8').toString();
    const configs = input.split('\n');
    const nodes = this.createNodes(configs);
    this.linkNodes(nodes, configs);

    return new Tree(nodes[0]);
  }
  private createNodes(configs: string[]): INode[] {
    const nodes: Node[] = [];
    for (const config of configs) {
      const elems = config.split(' ');
      if (elems.length < 2) throw INPUT_FILE_EXCEPTION;
      nodes.push(new Node({ min: +elems[0], max: +elems[1] }));
    }

    return nodes;
  }
  private linkNodes(nodes: INode[], configs: string[]): void {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes.find((node) => node.index === i);

      const childrenIndexes = configs[i].split(' ').slice(2);
      const children = childrenIndexes.map((index) => {
        return nodes.find((node) => node.index === +index);
      });

      node.appendChildren(children);
    }
  }
}

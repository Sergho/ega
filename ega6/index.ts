import { Node } from './src/tree/node/node';
import { Tree } from './src/tree/tree';

const nodes = Array.from(Array(5), () => new Node());
nodes[0].appendChildren([nodes[1], nodes[2]]);
nodes[1].appendChildren([nodes[3], nodes[4]]);

const tree = new Tree(nodes[0]);
console.log(tree.info());

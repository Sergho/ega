import { INPUT_FILENAME } from './src/common/constants';
import { FileReader } from './src/file-reader/file-reader';

const reader = new FileReader(INPUT_FILENAME);
const tree = reader.buildTree();

console.log('Tree:');
console.log(tree.info());
if (tree.isCompatible()) {
  console.log(tree.optimal());
  console.log(tree.optimum());
} else {
  console.log('Incompatible data!');
}

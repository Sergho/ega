import { INPUT_FILENAME } from './src/common/constants';
import { FileReader } from './src/file-reader/file-reader';

const reader = new FileReader(INPUT_FILENAME);
const tree = reader.buildTree();
tree.calcOptimum();
console.log(tree.info());

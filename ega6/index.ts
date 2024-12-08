import { INPUT_FILENAME } from './src/common/constants';
import { FileReader } from './src/file-reader/file-reader';

const reader = new FileReader(INPUT_FILENAME);
const tree = reader.read();
console.log(tree.info());

console.log(tree.isCompatible());

console.log(tree.reduced().info());

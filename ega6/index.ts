import { FileReader } from './src/file/reader/file-reader';

const reader = new FileReader('ega6/input.txt');
const tree = reader.read();
console.log(tree.info());

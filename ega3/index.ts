import NaturalCode from './codes/NaturalCode';
import { N } from './constants/constants';
import { popRandom } from './util/popRandom';

let max = new NaturalCode();
max.generate();
let close: NaturalCode[] = max.getClose(NaturalCode);
console.log(`Init: ${max.getPreview()}`)
console.log(`Close(${close.length}):`);
for (const closeItem of close) {
  console.log(closeItem.getPreview());
}
for (let i = 0; i < N; i++) {
  let maxChanged = false;
  if (close.length === 0) break;

  const code = popRandom({ list: close });

  if (code.getFitness() > max.getFitness()) {
    max = code;
    close = max.getClose(NaturalCode);
    maxChanged = true;
  }

  console.log(
    `#${i}\tCurrent: ${code.getPreview()},\tMax: ${max.getPreview()}\t${
      maxChanged ? '(Max changed)' : ''
    }`
  );
  console.log(`Close(${close.length}):`);
  for (const closeItem of close) {
    console.log(closeItem.getPreview());
  }
}

console.log('Result:', max.getPreview());

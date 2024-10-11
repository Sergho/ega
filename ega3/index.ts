import NaturalCode from './codes/NaturalCode';
import { N } from './constants/constants';
import { maxLocal } from './util/maxLocal';
import { popRandom } from './util/popRandom';

let max = new NaturalCode();
max.generate();
let close: NaturalCode[] = max.getClose(NaturalCode);
console.log(`Init: ${max.getPreview()}`);
console.log(`Close(${close.length}):`);
for (const closeItem of close) {
  console.log(closeItem.getPreview());
}
for (let i = 0; i < N; i++) {
  let maxChanged = false;

  const local = maxLocal(close);

  if (local.getFitness() > max.getFitness()) {
    max = local;
    close = max.getClose(NaturalCode);
    maxChanged = true;
  } else break;

  console.log(
    `#${i}\tCurrent: ${local.getPreview()},\tMax: ${max.getPreview()}\t${
      maxChanged ? '(Max changed)' : ''
    }`
  );
  console.log(`Close(${close.length}):`);
  for (const closeItem of close) {
    console.log(closeItem.getPreview());
  }
}

console.log('Result:', max.getPreview());

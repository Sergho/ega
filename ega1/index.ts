import Code from './codes/Code';
import RandomCode from './codes/RandomCode';
import { MODE, N, SEED } from './constants/constants';
import random from 'random';
import { generateCode } from './util/generateCode';

if(MODE === 1){
  if(SEED) random.use(SEED);
  RandomCode.initMap();
}

let max = new Code();
for (let i = 0; i < N; i++) {
  let maxChanged = false;
  const code = generateCode(MODE);
  code.generate();

  if (code.getFitness() > max.getFitness()) {
    max = code;
    maxChanged = true;
  }

  console.log(
    `#${i}\t Current: ${code.getPreview()},\t Max: ${max.getPreview()}\t${maxChanged ? '(Max changed)' : ''}`
  );
}

console.log(`Result: ${max.getPreview()}`);

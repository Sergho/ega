import Code from './codes/Code';
import NaturalCode from './codes/NaturalCode';
import RandomCode from './codes/RandomCode';
import SquareCode from './codes/SquareCode';
import { N } from './constants/constants';
import random from 'random';

random.use(123);
RandomCode.initMap();

let max = new Code();
for (let i = 0; i < N; i++) {
  const code = new RandomCode();
  code.generate();

  if (code.getFitness() > max.getFitness()) max = code;

  console.log(
    `#${i}\t Current: ${code.getPreview()},\t Max: ${max.getPreview()}`
  );
}

console.log(`Result: ${max.getPreview()}`);

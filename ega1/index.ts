import Code from './codes/Code';
import { N } from './constants/constants';
import SquareCode from './codes/SquareCode';

let max = new Code();
for (let i = 0; i < N; i++) {
  let maxChanged = false;
  const code = new SquareCode();
  code.generate();

  if (code.getFitness() > max.getFitness()) {
    max = code;
    maxChanged = true;
  }

  console.log(
    `#${i}\t Current: ${code.getPreview()},\t Max: ${max.getPreview()}\t${
      maxChanged ? '(Max changed)' : ''
    }`
  );
}

console.log(`Result: ${max.getPreview()}`);

import Code from './codes/Code';
import { N } from './constants/constants';
import SquareCode from './codes/SquareCode';
import { printLandscape } from './util/printLandscape';

printLandscape({ limit: 32 });

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
    `#${i}\tCurrent: ${code.getPreview()},\tMax: ${max.getPreview()}\t${
      maxChanged ? '(Max changed)' : ''
    }`
  );
}

console.log(`Result: ${max.getPreview()}`);

import Code from '../codes/Code';
import { createCode } from '../util/createCode';
import { SearchOptions } from './SearchOptions';

export const MCSearch = (options: SearchOptions): Code => {
  let max = createCode(options.codeType, {
    codeSize: options.codeSize,
    initialValue: 0,
  });
  for (let i = 0; i < options.iterationsCount; i++) {
    let maxChanged = false;
    const code = createCode(options.codeType, { codeSize: options.codeSize });
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
  return max;
};

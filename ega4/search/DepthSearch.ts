import Code from '../codes/Code';
import { CODE_TYPES } from '../constants/constants';
import { createCode } from '../util/createCode';
import { popRandom } from '../util/popRandom';
import { SearchOptions } from './SearchOptions';

export const DepthSearch = (options: SearchOptions): Code => {
  let max = createCode(options.codeType, { codeSize: options.codeSize });
  max.generate();
  let close = max.getClose(CODE_TYPES[options.codeType]);
  console.log(`Init: ${max.getPreview()}`);
  console.log(`Close(${close.length}):`);
  for (const closeItem of close) {
    console.log(closeItem.getPreview());
  }

  for (let i = 0; i < options.iterationsCount; i++) {
    let maxChanged = false;
    if (close.length === 0) break;

    const code = popRandom({ list: close });

    if (code.getFitness() > max.getFitness()) {
      max = code;
      close = max.getClose(CODE_TYPES[options.codeType]);
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

  return max;
};

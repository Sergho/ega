import Code from '../codes/Code';
import { CODE_TYPES } from '../constants/constants';
import { createCode } from '../util/createCode';
import { maxLocal } from '../util/maxLocal';
import { SearchOptions } from './SearchOptions';

export const WidthSearch = (options: SearchOptions): Code => {
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

    const local = maxLocal(close);

    if (local.getFitness() > max.getFitness()) {
      max = local;
      close = max.getClose(CODE_TYPES[options.codeType]);
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

  return max;
};

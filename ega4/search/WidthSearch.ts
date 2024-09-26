import Code from '../codes/Code';
import { CODE_TYPES } from '../constants/constants';
import { CodeType } from '../util/CodeType.enum';
import { createCode } from '../util/createCode';
import { maxLocal } from '../util/maxLocal';

export class WidthSearchOptions {
  iterationsCount: number;
  codeSize: number;
  codeType: CodeType;
}
export const WidthSearch = (options: WidthSearchOptions): Code => {
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
    }

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

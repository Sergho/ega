import Code from '../codes/Code';
import SquareCode from '../codes/SquareCode';
import { CodeType, createCode } from '../util/createCode';

export class MCSearchOptions {
  iterationsCount: number;
  codeSize: number;
  codeType: CodeType;
}
export const MCSearch = (options: MCSearchOptions): Code => {
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

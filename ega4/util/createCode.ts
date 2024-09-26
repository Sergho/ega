import Code from '../codes/Code';
import NaturalCode from '../codes/NaturalCode';
import RandomCode from '../codes/RandomCode';
import SinLnCode from '../codes/SinLnCode';
import SquareCode from '../codes/SquareCode';
import { CodeType } from './CodeType.enum';

export class GenerateCodeOptions {
  codeSize: number;
  initialValue?: number;
}
export const createCode = (
  mode: CodeType,
  options: GenerateCodeOptions
): Code => {
  const codes = [
    new RandomCode(options.codeSize, options?.initialValue),
    new NaturalCode(options.codeSize, options?.initialValue),
    new SquareCode(options.codeSize, options?.initialValue),
    new SinLnCode(options.codeSize, options?.initialValue),
  ];
  return codes[mode];
};

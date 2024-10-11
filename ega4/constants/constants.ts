import NaturalCode from '../codes/NaturalCode';
import RandomCode from '../codes/RandomCode';
import SinLnCode from '../codes/SinLnCode';
import SquareCode from '../codes/SquareCode';
import { CodeType } from '../util/CodeType.enum';

export const L = 7;
export const N = 5;
export const M = 5;
export const RANDOM_MIN = 1;
export const RANDOM_MAX = 100;
export const SEED = 123;
const number = CodeType.Random;
export const CODE_TYPES = {
  [CodeType.Random]: RandomCode,
  [CodeType.Natural]: NaturalCode,
  [CodeType.Square]: SquareCode,
  [CodeType.SinLn]: SinLnCode,
};

import { NumberMatrix } from '../matrices/number-matrix';
import { NumberPermutation } from '../permutations/number-permutation';
import { NumberVector } from '../vectors/number-vector';

// TODO Get these constants from user
export const N = 15;
export const M = 5;
export const X = new NumberMatrix([
  new NumberVector([24, 34, 39, 41, 45]),
  new NumberVector([0, 2, 5, 10, 19]),
  new NumberVector([3, 9, 19, 22, 29]),
  new NumberVector([2, 5, 10, 19, 22]),
  new NumberVector([9, 17, 21, 27, 37]),
  new NumberVector([17, 21, 27, 34, 38]),
  new NumberVector([20, 27, 34, 39, 41]),
  new NumberVector([34, 46, 49, 56, 62]),
  new NumberVector([30, 38, 46, 47, 51]),
]);
export const D = new NumberVector([19, 22, 25, 29, 34, 37, 40, 41, 45]);
export const F = new NumberVector([1, 1, 1, 1, 1, 1, 1, 1, 1]);
export const T = new NumberMatrix([
  new NumberVector([6, 4, 2, 2, 5]),
  new NumberVector([2, 3, 5, 9, 3]),
  new NumberVector([6, 8, 2, 3, 8]),
  new NumberVector([1, 3, 9, 3, 7]),
  new NumberVector([8, 4, 6, 6, 1]),
  new NumberVector([3, 6, 7, 4, 3]),
  new NumberVector([4, 7, 5, 1, 4]),
  new NumberVector([2, 3, 7, 6, 8]),
  new NumberVector([4, 8, 1, 4, 9]),
]);
export const Q = new NumberPermutation([2, 4, 3, 5, 6, 7, 1, 9, 8]);

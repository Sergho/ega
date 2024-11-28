import { NumberPermutation } from '../permutations/number-permutation';

export interface ISaver {
  save(queue: NumberPermutation): void;
}

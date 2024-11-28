import { NumberPermutation } from '../../math/permutations/number-permutation';

export interface ISaver {
  save(queue: NumberPermutation): void;
}

import { NumberPermutation } from '../../math/permutations/number-permutation';

export interface IIndividual {
  code: NumberPermutation;
  fitness(): number;
  print(): void;
}

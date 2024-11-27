import { NumberPermutation } from '../../permutations/number-permutation';

export interface IIndividual {
  code: NumberPermutation;
  fitness(): number;
  print(): void;
}

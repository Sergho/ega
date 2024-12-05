import { NumberMatrix } from '../../math/matrices/number-matrix';
import { NumberPermutation } from '../../math/permutations/number-permutation';

export interface SimulatorOptions {
  queue: NumberPermutation;
  executionTimes: NumberMatrix;
}
export interface ISimulation {
  simulate(options: SimulatorOptions): NumberMatrix;
}

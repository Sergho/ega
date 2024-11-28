import { NumberMatrix } from '../matrices/number-matrix';
import { NumberPermutation } from '../permutations/number-permutation';

export interface SimulatorOptions {
  queue: NumberPermutation;
  executionTimes: NumberMatrix;
}
export interface ISimulation {
  simulate(options: SimulatorOptions): NumberMatrix;
}

import { NumberMatrix } from '../matrices/number-matrix';
import { NumberPermutation } from '../permutations/number-permutation';
import { NumberVector } from '../vectors/number-vector';

// TODO Change types to interfaces
export class SimulatorOptions {
  queue: NumberPermutation;
  executionTimes: NumberMatrix;
}
export interface ISimulation {
  simulate(options: SimulatorOptions): NumberMatrix;
}

import { OXCrossover } from '../ega/crossovers/ox-crossover';
import { EGAStrategies } from '../ega/ega';
import { GeneticMutation } from '../ega/mutations/genetic-mutation';
import { RandomSelector } from '../ega/selectors/random-selector';
import { RandomStartPopulation } from '../ega/start-populations/random-start-population';
import { Estimator } from '../estimator/estimator';
import { NumberMatrix } from '../matrices/number-matrix';
import { NumberPermutation } from '../permutations/number-permutation';
import { Simulation } from '../simulation/simulation';
import { NumberVector } from '../vectors/number-vector';

export const SIMULATION = new Simulation();
export const ESTIMATOR = new Estimator();
export const START_POPULATION_SIZE = 14;
export const EGA_STRATEGIES: EGAStrategies = {
  startPopulation: new RandomStartPopulation(),
  selector: new RandomSelector(),
  crossover: new OXCrossover(),
  mutation: new GeneticMutation(),
};

// TODO Get these constants from user
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

import { OXCrossover } from '../ega/crossovers/ox-crossover';
import { EGAStrategies } from '../ega/ega';
import { GeneticMutation } from '../ega/mutations/genetic-mutation';
import { TournamentSelection } from '../ega/selections/tournament-selection';
import { RandomSelector } from '../ega/selectors/random-selector';
import { RandomStartPopulation } from '../ega/start-populations/random-start-population';
import { Estimator } from '../estimator/estimator';
import { NumberMatrix } from '../matrices/number-matrix';
import { Simulation } from '../simulation/simulation';
import { NumberVector } from '../vectors/number-vector';

export const GENERATIONS_COUNT = 1000;
export const SIMULATION = new Simulation();
export const ESTIMATOR = new Estimator();
export const EGA_STRATEGIES: EGAStrategies = {
  startPopulation: new RandomStartPopulation(14),
  selector: new RandomSelector(),
  crossover: new OXCrossover(),
  mutation: new GeneticMutation(),
  selection: new TournamentSelection(7, 14),
};

// TODO Get these constants from user
export const D = new NumberVector([
  20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
]);
export const F = new NumberVector([
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
]);
export const T = new NumberMatrix([
  new NumberVector([3, 23, 7, 4, 5]),
  new NumberVector([13, 9, 21, 15, 16]),
  new NumberVector([7, 11, 9, 1, 1]),
  new NumberVector([15, 8, 19, 1, 17]),
  new NumberVector([5, 11, 17, 12, 23]),
  new NumberVector([5, 22, 23, 1, 5]),
  new NumberVector([3, 10, 6, 7, 7]),
  new NumberVector([17, 15, 2, 24, 9]),
  new NumberVector([13, 4, 8, 19, 4]),
  new NumberVector([3, 6, 23, 24, 16]),
  new NumberVector([1, 5, 23, 9, 22]),
  new NumberVector([3, 15, 16, 12, 20]),
  new NumberVector([4, 7, 1, 20, 16]),
  new NumberVector([4, 9, 11, 11, 22]),
  new NumberVector([19, 10, 16, 16, 12]),
]);

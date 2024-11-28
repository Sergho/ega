import { OXCrossover } from '../ega/crossovers/ox-crossover';
import { EGAStrategies } from '../ega/ega';
import { GeneticMutation } from '../ega/mutations/genetic-mutation';
import { TournamentSelection } from '../ega/selections/tournament-selection';
import { RandomSelector } from '../ega/selectors/random-selector';
import { RandomStartPopulation } from '../ega/start-populations/random-start-population';
import { Estimator } from '../estimator/estimator';
import { Simulation } from '../simulation/simulation';

export const INPUT_FILENAME = 'ega5/input.txt';
export const OUTPUT_FILENAME = 'ega5/output.txt';
export const GENERATIONS_COUNT = 40;
export const SIMULATION = new Simulation();
export const ESTIMATOR = new Estimator();
export const EGA_STRATEGIES: EGAStrategies = {
  startPopulation: new RandomStartPopulation(14),
  selector: new RandomSelector(),
  crossover: new OXCrossover(),
  mutation: new GeneticMutation(),
  selection: new TournamentSelection(7, 14),
};

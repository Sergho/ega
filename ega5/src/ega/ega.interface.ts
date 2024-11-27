import { Individual } from './individual/individual';
import { PairDto } from './individual/pair.dto';

export interface IEGA {
  createPopulation();
  selectParents(): PairDto[];
  crossover(pairs: PairDto[]): Individual[];
  mutation(children: Individual[]): Individual[];
  selection(reproduction: Individual[]): void;
}

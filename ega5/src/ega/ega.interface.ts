import { Individual } from './individual/individual';
import { PairDto } from './individual/pair.dto';

export interface IEGA {
  createPopulation(size: number);
  selectParents(): PairDto[];
  crossover(pairs: PairDto[]): Individual[];
  mutation(children: Individual[]): Individual[];
}

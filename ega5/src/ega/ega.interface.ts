import { Individual } from './individual/individual';
import { PairDto } from './individual/pair.dto';

export interface IEGA {
  createPopulation(size: number): void;
  selectParents(): PairDto[];
  crossover(pairs: PairDto[]): Individual[];
}

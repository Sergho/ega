import { PairDto } from './individual/pair.dto';

export interface IEGA {
  createPopulation(size: number): void;
  selectParents(): PairDto[];
}

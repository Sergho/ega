import { Individual } from '../individual/individual';
import { PairDto } from '../individual/pair.dto';

export interface ISelector {
  select(population: Individual[]): PairDto[];
}

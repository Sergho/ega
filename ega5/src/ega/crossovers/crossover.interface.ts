import { InputDto } from '../../data-sources/dto/input.dto';
import { Individual } from '../individual/individual';
import { PairDto } from '../individual/pair.dto';

export interface ICrossover {
  cross(pairs: PairDto[], inputs: InputDto): Individual[];
}

import { InputDto } from '../../data-sources/dto/input.dto';
import { Individual } from '../individual/individual';

export interface IStartPopulation {
  create(size: number, inputs: InputDto): Individual[];
}

import { InputDto } from '../../data-sources/dto/input.dto';
import { Individual } from '../individual/individual';

export interface IMutation {
  mutate(children: Individual[], inputs: InputDto): Individual[];
}

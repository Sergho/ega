import { InputDto } from './dto/input.dto';

export interface IDataSource {
  launch(): InputDto;
}

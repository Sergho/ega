import { Individual } from '../individual/individual';

export interface ISelection {
  selection(reproduction: Individual[]): Individual[];
}

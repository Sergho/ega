import { Individual } from '../individual/individual';
import { PairDto } from '../individual/pair.dto';
import { ISelector } from './selector.interface';

export class RandomSelector implements ISelector {
  public constructor() {}
  public select(population: Individual[]): PairDto[] {
    const shuffled = [...population];
    shuffled.sort(() => Math.random() - 0.5);
    if (shuffled.length % 2 !== 0) shuffled.pop();

    const pairs: PairDto[] = [];
    for (let i = 0; i < shuffled.length; i += 2) {
      pairs.push({
        first: shuffled[i],
        second: shuffled[i + 1],
      });
    }

    return pairs;
  }
}

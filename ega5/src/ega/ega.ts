import { InputDto } from '../data-sources/dto/input.dto';
import { ICrossover } from './crossovers/crossover.interface';
import { IEGA } from './ega.interface';
import { Individual } from './individual/individual';
import { PairDto } from './individual/pair.dto';
import { ISelector } from './selectors/selector.interface';
import { IStartPopulation } from './start-populations/start-population.interface';

export class EGAStrategies {
  startPopulation: IStartPopulation;
  selector: ISelector;
  crossover: ICrossover;
}
export class EGA implements IEGA {
  private _population: Individual[];
  private _inputs: InputDto;
  private _strategies: EGAStrategies;
  public constructor(inputs: InputDto, strategies: EGAStrategies) {
    this._inputs = inputs;
    this._strategies = strategies;
  }
  public createPopulation(size: number) {
    this._population = this._strategies.startPopulation.create(
      size,
      this._inputs
    );
  }
  public selectParents(): PairDto[] {
    return this._strategies.selector.select(this._population);
  }
  public crossover(pairs: PairDto[]): Individual[] {
    return this._strategies.crossover.cross(pairs, this._inputs);
  }
}

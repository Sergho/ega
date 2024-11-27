import { InputDto } from '../data-sources/dto/input.dto';
import { ICrossover } from './crossovers/crossover.interface';
import { IEGA } from './ega.interface';
import { Individual } from './individual/individual';
import { PairDto } from './individual/pair.dto';
import { IMutation } from './mutations/mutation.interface';
import { TournamentSelection } from './selections/tournament-selection';
import { ISelector } from './selectors/selector.interface';
import { IStartPopulation } from './start-populations/start-population.interface';

export class EGAStrategies {
  startPopulation: IStartPopulation;
  selector: ISelector;
  crossover: ICrossover;
  mutation: IMutation;
  selection: TournamentSelection;
}
export class EGA implements IEGA {
  public _population: Individual[];
  private _inputs: InputDto;
  private _strategies: EGAStrategies;
  public constructor(inputs: InputDto, strategies: EGAStrategies) {
    this._inputs = inputs;
    this._strategies = strategies;
  }
  public createPopulation() {
    this._population = this._strategies.startPopulation.create(this._inputs);
  }
  public selectParents(): PairDto[] {
    return this._strategies.selector.select(this._population);
  }
  public crossover(pairs: PairDto[]): Individual[] {
    return this._strategies.crossover.cross(pairs, this._inputs);
  }
  public mutation(children: Individual[]): Individual[] {
    return this._strategies.mutation.mutate(children, this._inputs);
  }
  public selection(mutated: Individual[]): void {
    this._population = this._strategies.selection.selection([
      ...this._population,
      ...mutated,
    ]);
  }
}

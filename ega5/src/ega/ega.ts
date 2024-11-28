import { InputDto } from '../data-sources/dto/input.dto';
import { ICrossover } from './crossovers/crossover.interface';
import { IEGA, PopulationInfo } from './ega.interface';
import { Individual } from './individual/individual';
import { PairDto } from './individual/pair.dto';
import { IMutation } from './mutations/mutation.interface';
import { TournamentSelection } from './selections/tournament-selection';
import { ISelector } from './selectors/selector.interface';
import { IStartPopulation } from './start-populations/start-population.interface';

export interface EGAStrategies {
  startPopulation: IStartPopulation;
  selector: ISelector;
  crossover: ICrossover;
  mutation: IMutation;
  selection: TournamentSelection;
}
export class EGA implements IEGA {
  public _population: Individual[];
  private _populationIndex: number;
  private _inputs: InputDto;
  private _strategies: EGAStrategies;
  public constructor(inputs: InputDto, strategies: EGAStrategies) {
    this._inputs = inputs;
    this._strategies = strategies;
  }
  public best(): Individual {
    const sorted = this._population.sort((a, b) => {
      return a.fitness() - b.fitness();
    });
    return sorted[0];
  }
  public iteration(): PopulationInfo {
    if (!this._population || this._population.length === 0) {
      this.createPopulation();
      this._populationIndex = 1;
      return this.populationInfo();
    }
    const parents: PairDto[] = this.selectParents();
    const children: Individual[] = this.crossover(parents);
    const mutated: Individual[] = this.mutation(children);
    this.selection(mutated);
    this._populationIndex++;
    return this.populationInfo();
  }
  private populationInfo(): PopulationInfo {
    return {
      index: this._populationIndex,
      avg: this._population.map((i) => i.fitness()).reduce((a, b) => a + b, 0),
      min: Math.min(...this._population.map((i) => i.fitness())),
    };
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

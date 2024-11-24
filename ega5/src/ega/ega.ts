import { InputDto } from '../data-sources/dto/input.dto';
import { Estimator } from '../estimator/estimator';
import { NumberPermutation } from '../permutations/number-permutation';
import { Simulation } from '../simulation/simulation';
import { IEGA } from './ega.interface';
import { Individual } from './individual/individual';
import { PairDto } from './individual/pair.dto';

export class EGA implements IEGA {
  private _population: Individual[];
  private _inputs: InputDto;
  public constructor(inputs: InputDto) {
    this._inputs = inputs;
  }
  public createPopulation(size: number) {
    this._population = [];
    for (let i = 0; i < size; i++) {
      const permutation = new NumberPermutation();
      permutation.fillRandom(this._inputs.deadlines.size);

      const individual = new Individual(permutation, {
        simulation: new Simulation(),
        estimator: new Estimator(),
        inputs: this._inputs,
      });
      this._population.push(individual);
    }
  }
  public selectParents(): PairDto[] {
    const population = [...this._population];
    population.sort(() => Math.random() - 0.5);
    if (population.length % 2 !== 0) population.pop();

    const pairs: PairDto[] = [];
    for (let i = 0; i < population.length; i += 2) {
      pairs.push({
        first: population[i],
        second: population[i + 1],
      });
    }

    return pairs;
  }
}

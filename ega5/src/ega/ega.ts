import { InputDto } from '../data-sources/dto/input.dto';
import { Estimator } from '../estimator/estimator';
import { NumberPermutation } from '../permutations/number-permutation';
import { Simulation } from '../simulation/simulation';
import { IEGA } from './ega.interface';
import { Individual } from './individual/individual';

export class EGA implements IEGA {
  public population: Individual[];
  private _inputs: InputDto;
  public constructor(inputs: InputDto) {
    this._inputs = inputs;
  }
  public createPopulation(size: number) {
    this.population = [];
    for (let i = 0; i < size; i++) {
      const permutation = new NumberPermutation();
      permutation.fillRandom(this._inputs.deadlines.size);

      const individual = new Individual(permutation, {
        simulation: new Simulation(),
        estimator: new Estimator(),
        inputs: this._inputs,
      });
      this.population.push(individual);
    }
  }
}

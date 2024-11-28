import { SIMULATION, ESTIMATOR } from '../../constants/constants';
import { InputDto } from '../../data-sources/dto/input.dto';
import { NumberPermutation } from '../../math/permutations/number-permutation';
import { Individual } from '../individual/individual';
import { IStartPopulation } from './start-population.interface';

export class RandomStartPopulation implements IStartPopulation {
  private _size: number;
  public constructor(size: number) {
    this._size = size;
  }
  public create(inputs: InputDto): Individual[] {
    const population: Individual[] = [];
    for (let i = 0; i < this._size; i++) {
      const permutation = new NumberPermutation();
      permutation.fillRandom(inputs.deadlines.size);

      const individual = new Individual(permutation, {
        simulation: SIMULATION,
        estimator: ESTIMATOR,
        inputs,
      });
      population.push(individual);
    }

    return population;
  }
}

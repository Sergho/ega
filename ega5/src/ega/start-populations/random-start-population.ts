import { ESTIMATOR, SIMULATION } from '../../constants/constants';
import { InputDto } from '../../data-sources/dto/input.dto';
import { Estimator } from '../../estimator/estimator';
import { NumberPermutation } from '../../permutations/number-permutation';
import { Simulation } from '../../simulation/simulation';
import { Individual } from '../individual/individual';
import { IStartPopulation } from './start-population.interface';

export class RandomStartPopulation implements IStartPopulation {
  public constructor() {}
  public create(size: number, inputs: InputDto): Individual[] {
    const population: Individual[] = [];
    for (let i = 0; i < size; i++) {
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

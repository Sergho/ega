import { SIMULATION, ESTIMATOR } from '../../constants/constants';
import { InputDto } from '../../data-sources/dto/input.dto';
import { NumberPermutation } from '../../math/permutations/number-permutation';
import { Individual } from '../individual/individual';
import { IMutation } from './mutation.interface';

export class GeneticMutation implements IMutation {
  public constructor() {}
  public mutate(children: Individual[], inputs: InputDto): Individual[] {
    const mutatedChildren: Individual[] = [];
    for (const child of children) {
      const code: number[] = [];
      for (let i = 0; i < child.code.size; i++) {
        code.push(child.code.get(i));
      }

      const firstIndex = this.randomIndex(child.code.size);
      const secondIndex = this.randomIndex(child.code.size);
      [code[firstIndex], code[secondIndex]] = [
        code[secondIndex],
        code[firstIndex],
      ];

      const mutated = new Individual(new NumberPermutation(code), {
        simulation: SIMULATION,
        estimator: ESTIMATOR,
        inputs,
      });

      mutatedChildren.push(mutated);
    }

    return mutatedChildren;
  }
  private randomIndex(codeSize: number): number {
    return Math.floor(Math.random() * codeSize);
  }
}

import { ESTIMATOR, SIMULATION } from '../../constants/constants';
import { CROSSOVER_ERROR } from '../../constants/exceptions';
import { InputDto } from '../../data-sources/dto/input.dto';
import { NumberPermutation } from '../../permutations/number-permutation';
import { Individual } from '../individual/individual';
import { PairDto } from '../individual/pair.dto';
import { ICrossover } from './crossover.interface';

export class OXCrossover implements ICrossover {
  public constructor() {}
  public cross(pairs: PairDto[], inputs: InputDto): Individual[] {
    const offspring: Individual[] = [];
    for (const pair of pairs) {
      const { firstBorder, secondBorder } = this.generateBorders(
        pair.first.code.size
      );
      const firstChild = this.createChild(
        pair.first,
        pair.second,
        firstBorder,
        secondBorder,
        inputs
      );
      const secondChild = this.createChild(
        pair.second,
        pair.first,
        firstBorder,
        secondBorder,
        inputs
      );
      offspring.push(firstChild, secondChild);
    }

    return offspring;
  }
  private createChild(
    first: Individual,
    second: Individual,
    firstBorder: number,
    secondBorder: number,
    inputs: InputDto
  ): Individual {
    this.checkSizes(first, second);

    const list: number[] = [];
    for (let i = firstBorder; i <= secondBorder; i++) {
      list[i] = first.code.get(i);
    }
    let childIndex = secondBorder + 1;
    if (childIndex >= second.code.size) childIndex -= second.code.size;
    for (let i = 0; i < second.code.size; i++) {
      let parentIndex = secondBorder + i + 1;
      if (parentIndex >= second.code.size) parentIndex -= second.code.size;

      const insert = second.code.get(parentIndex);
      if (list.includes(insert)) continue;
      else {
        list[childIndex] = insert;
        childIndex++;
        if (childIndex >= second.code.size) childIndex -= second.code.size;
      }
    }

    const code = new NumberPermutation(list);
    return new Individual(code, {
      simulation: SIMULATION,
      estimator: ESTIMATOR,
      inputs,
    });
  }
  private checkSizes(first: Individual, second: Individual): void {
    if (first.code.size !== second.code.size)
      throw CROSSOVER_ERROR.INCORRECT_PARENT_SIZES;
  }
  private generateBorders(size: number): {
    firstBorder: number;
    secondBorder: number;
  } {
    const start = 0;
    const mid = (size - 1) / 2;
    const end = size - 1;

    return {
      firstBorder: Math.floor(Math.random() * (mid - start) + start),
      secondBorder: Math.floor(Math.random() * (end - mid) + mid),
    };
  }
}

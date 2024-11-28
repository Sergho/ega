import { InputDto } from '../../data-sources/dto/input.dto';
import { NumberPermutation } from '../../math/permutations/number-permutation';
import { Estimator } from '../../task/estimator/estimator';
import { Simulation } from '../../task/simulation/simulation';
import { IIndividual } from './individual.interface';

export interface IndividualOptions {
  simulation: Simulation;
  estimator: Estimator;
  inputs: InputDto;
}
export class Individual implements IIndividual {
  private _simulation: Simulation;
  private _estimator: Estimator;
  private _inputs: InputDto;
  public code: NumberPermutation;
  public constructor(code: NumberPermutation, options: IndividualOptions) {
    this.code = code;
    this._simulation = options.simulation;
    this._estimator = options.estimator;
    this._inputs = options.inputs;
  }
  public fitness(): number {
    const startTimes = this._simulation.simulate({
      queue: this.code,
      executionTimes: this._inputs.executionTimes,
    });

    return this._estimator.estimate({ startTimes, ...this._inputs });
  }
  public print(): void {
    this.code.print();
    console.log(`Fitness: ${this.fitness()}`);
  }
}

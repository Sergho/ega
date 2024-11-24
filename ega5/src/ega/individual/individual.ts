import { InputDto } from '../../data-sources/dto/input.dto';
import { Estimator } from '../../estimator/estimator';
import { NumberMatrix } from '../../matrices/number-matrix';
import { NumberPermutation } from '../../permutations/number-permutation';
import { Simulation } from '../../simulation/simulation';
import { IIndividual } from './individual.interface';

export class IndividualOptions {
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
}

import { SIMULATION_ERROR } from '../../constants/exceptions';
import { NumberMatrix } from '../../math/matrices/number-matrix';
import { ISimulation, SimulatorOptions } from './simulation.interface';

export class Simulation implements ISimulation {
  public constructor() {}
  public simulate(options: SimulatorOptions): NumberMatrix {
    this.checkSizes(options);

    const { queue, executionTimes } = options;

    const startTimes = new NumberMatrix();
    startTimes.clear(executionTimes.rowsCount, executionTimes.colsCount);
    for (const detail of queue) {
      let detailFreeTime = 0;
      for (let i = 0; i < executionTimes.colsCount; i++) {
        const machineFreeTime = this.getMachineFreeTime(
          i,
          startTimes,
          executionTimes
        );
        const freeTime = Math.max(machineFreeTime, detailFreeTime);

        startTimes.set(detail - 1, i, freeTime);
        detailFreeTime = freeTime + executionTimes.get(detail - 1, i);
      }
    }
    return startTimes;
  }
  private getMachineFreeTime(
    machineIndex: number,
    startTimes: NumberMatrix,
    executionTimes: NumberMatrix
  ): number {
    let max = null;
    let maxIndex = -1;
    for (let i = 0; i < startTimes.rowsCount; i++) {
      const current = startTimes.get(i, machineIndex);
      if (current === null) continue;
      if (current > max || max === null) {
        max = current;
        maxIndex = i;
      }
    }

    if (max === null) return 0;
    return max + executionTimes.get(maxIndex, machineIndex);
  }
  private checkSizes(options: SimulatorOptions): void {
    const { queue, executionTimes } = options;

    if (queue.size !== executionTimes.rowsCount)
      throw SIMULATION_ERROR.INCORRECT_SIZES;
  }
}

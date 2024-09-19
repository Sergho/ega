import { L } from '../constants/constants';
import Code from './Code';

class SeedCode extends Code {
  protected static fitnessMap: number[];
  static initMap(map: number[]) {
    if (map.length !== L) throw new Error('Incorrect fitness map size');
    this.fitnessMap = [...map];
  }
  getFitness(): number {
    return SeedCode.fitnessMap[this.code];
  }
}

export default SeedCode;

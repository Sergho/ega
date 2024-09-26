import { L, RANDOM_MAX, RANDOM_MIN } from '../constants/constants';
import { generateMap } from '../util/generateMap';
import SeedCode from './SeedCode';

class RandomCode extends SeedCode {
  static initMap(codeSize: number) {
    this.fitnessMap = generateMap({
      min: RANDOM_MIN,
      max: RANDOM_MAX,
      length: Math.pow(2, codeSize),
    });
  }
  getFitness(): number {
    return RandomCode.fitnessMap[this.code];
  }
}

export default RandomCode;

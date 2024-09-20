import { L, RANDOM_MAX, RANDOM_MIN } from '../constants/constants';
import { generateMap } from '../util/generateMap';
import SeedCode from './SeedCode';

class RandomCode extends SeedCode {
  static initMap() {
    this.fitnessMap = generateMap({
      min: RANDOM_MIN,
      max: RANDOM_MAX,
      length: Math.pow(2, L),
    });
  }
  getFitness(): number {
    return RandomCode.fitnessMap[this.code];
  }
}

export default RandomCode;

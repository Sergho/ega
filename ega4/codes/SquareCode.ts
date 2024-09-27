import { L } from '../constants/constants';
import Code from './Code';

class SquareCode extends Code {
  getFitness(): number {
    return Math.pow(this.code - Math.pow(2, this.size - 1), 2);
  }
}

export default SquareCode;

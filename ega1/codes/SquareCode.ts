import Code from './Code';

class SquareCode extends Code {
  getFitness(): number {
    return Math.pow(this.code, 2);
  }
}

export default SquareCode;

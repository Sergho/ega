import Code from './Code';

class NaturalCode extends Code {
  getFitness(): number {
    return this.code;
  }
}
export default NaturalCode;

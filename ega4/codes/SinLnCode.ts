import Code from './Code';

class SinLnCode extends Code {
  getFitness(): number {
    return 5 * Math.sin(this.code) + Math.log(this.code);
  }

  getPreview(): string {
    return `<${this.getBinary()}, ${this.getFitness().toFixed(2)}>`;
  }
}

export default SinLnCode;

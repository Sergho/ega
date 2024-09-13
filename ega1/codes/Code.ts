import { L } from '../constants/constants';
import { randomInt } from '../util/randomInt';

class Code {
  public code: number;

  constructor(code?: number) {
    this.code = code;
  }

  generate(): void {
    this.code = randomInt({ min: 0, max: Math.pow(2, L) - 1 });
  }

  getBinary(): string {
    if (this.code === undefined) return undefined;
    return this.code.toString(2).padStart(L, '0');
  }

  getPreview(): string {
    return `<${this.getBinary()}, ${this.getFitness()}>`;
  }

  getFitness(): number {
    return 0;
  }
}

export default Code;

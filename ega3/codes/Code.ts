import { L } from '../constants/constants';
import { randomInt } from '../util/randomInt';

class Code {
  public code: number;

  constructor(code?: number) {
    if (code && code > Math.pow(2, L)) throw new Error('Incorrect code');
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

  getClose<T extends Code>(type: { new (code?: number): T }): T[] {
    const close: T[] = [];
    const binary = this.getBinary();
    for (let i = 0; i < L; i++) {
      let pushed;
      if (binary[i] === '1')
        pushed = new type(this.code - Math.pow(2, L - i - 1));
      else pushed = new type(this.code + Math.pow(2, L - i - 1));
      close.push(pushed);
    }
    return close;
  }
}

export default Code;

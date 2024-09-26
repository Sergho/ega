import { randomInt } from '../util/randomInt';

class Code {
  public code: number;
  public size: number;

  constructor(size: number, code?: number) {
    this.code = code;
    this.size = size;
  }

  generate(): void {
    this.code = randomInt({ min: 0, max: Math.pow(2, this.size) - 1 });
  }

  getBinary(): string {
    if (this.code === undefined) return undefined;
    return this.code.toString(2).padStart(this.size, '0');
  }

  getPreview(): string {
    return `<${this.getBinary()}, ${this.getFitness()}>`;
  }

  getFitness(): number {
    return 0;
  }

  getClose<T extends Code>(type: {
    new (size: number, code?: number): T;
  }): T[] {
    const close: T[] = [];
    const binary = this.getBinary();
    for (let i = 0; i < this.size; i++) {
      let pushed;
      if (binary[i] === '1')
        pushed = new type(
          this.size,
          this.code - Math.pow(2, this.size - i - 1)
        );
      else
        pushed = new type(
          this.size,
          this.code + Math.pow(2, this.size - i - 1)
        );
      close.push(pushed);
    }
    return close;
  }
}

export default Code;

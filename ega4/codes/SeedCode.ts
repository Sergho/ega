import Code from './Code';

class SeedCode extends Code {
  protected static fitnessMap: number[];
  static initMap(codeSize: number, map: number[]) {
    if (map.length !== codeSize) throw new Error('Incorrect fitness map size');
    this.fitnessMap = [...map];
  }
  getFitness(): number {
    return SeedCode.fitnessMap[this.code];
  }
}

export default SeedCode;

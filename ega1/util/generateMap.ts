import { randomInt } from './randomInt';

export class GenerateMapOptions {
  length: number;
  min: number;
  max: number;
}

export const generateMap = (options: GenerateMapOptions): number[] => {
  const { length, min, max } = options;
  const map = [];
  for (let i = 0; i < length; i++) {
    map.push(randomInt({ min, max }));
  }
  return map;
};

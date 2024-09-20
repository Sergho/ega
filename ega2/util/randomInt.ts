import random from 'random';

export class RandomIntOptions {
  min: number;
  max: number;
}

export const randomInt = (options: RandomIntOptions): number => {
  const { min, max } = options;
  return Math.round(random.float(0, 1) * (max - min) + min);
};

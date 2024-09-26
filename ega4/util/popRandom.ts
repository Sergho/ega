import { randomInt } from './randomInt';

export const popRandom = <T>(args: { list: T[] }): T => {
  const index = randomInt({ min: 0, max: args.list.length - 1 });
  const item = args.list[index];
  args.list.splice(index, 1);
  return item;
};

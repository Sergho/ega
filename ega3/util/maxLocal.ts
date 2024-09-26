import Code from '../codes/Code';

export const maxLocal = (list: Code[]): Code => {
  let max = new Code(0);
  for (const item of list) {
    if (item.getFitness() > max.getFitness()) {
      max = item;
    }
  }
  return max;
};

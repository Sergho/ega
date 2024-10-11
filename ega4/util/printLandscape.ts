import SinLnCode from '../codes/SinLnCode';
import { L } from '../constants/constants';

export class PrintLandscapeOptions {
  limit: number;
}

export const printLandscape = (options: PrintLandscapeOptions): void => {
  console.log('Landscape:');
  for (let i = 0; i < options.limit; i++) {
    const code = new SinLnCode(L, i);
    console.log(`#${i + 1} ${code.getPreview()}`);
  }
};

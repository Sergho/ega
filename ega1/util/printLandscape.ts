import SquareCode from '../codes/SquareCode';

export class PrintLandscapeOptions {
  limit: number;
}

export const printLandscape = (options: PrintLandscapeOptions): void => {
  console.log('Landscape:');
  for (let i = 0; i < options.limit; i++) {
    const code = new SquareCode(i);
    console.log(`#${i + 1} ${code.getPreview()}`);
  }
};

import { MCSearch } from './search/MCSearch';
import { L, N } from './constants/constants';
import { CodeType } from './util/createCode';

const result = MCSearch({
  iterationsCount: N,
  codeSize: L,
  codeType: CodeType.Natural,
});
console.log(`Result: ${result.getPreview()}`);

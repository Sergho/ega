import { MCSearch } from './search/MCSearch';
import { L, N } from './constants/constants';
import { CodeType } from './util/CodeType.enum';
import { DepthSearch } from './search/DepthSearch';

const result = DepthSearch({
  iterationsCount: N,
  codeSize: L,
  codeType: CodeType.Natural,
});
console.log(`Result: ${result.getPreview()}`);

import { L, M, N } from './constants/constants';
import { DepthSearch } from './search/DepthSearch';
import { MCSearch } from './search/MCSearch';
import { WidthSearch } from './search/WidthSearch';
import { CodeType } from './util/CodeType.enum';
import { createCode } from './util/createCode';
import { printLandscape } from './util/printLandscape';
import { randomInt } from './util/randomInt';

printLandscape({ limit: 32 });

let max = createCode(CodeType.SinLn, { codeSize: L, initialValue: 0 });
for (let i = 0; i < N; i++) {
  const methods = [MCSearch, DepthSearch, WidthSearch];
  const messages = ['Monte - Carlo', 'Depth Search', 'Width Search'];
  const k = randomInt({ min: 0, max: 2 });

  console.log(`Action #${i} - ${messages[k]}`);
  const local = methods[k]({
    codeSize: L,
    iterationsCount: M,
    codeType: CodeType.SinLn,
  });
  console.log(`Local: ${local.getPreview()}`);

  if (local.getFitness() > max.getFitness()) {
    max = local;
  }
}

console.log(`Result: ${max.getPreview()}`);

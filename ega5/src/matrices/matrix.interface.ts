import { Vector } from '../vectors/vector';

export interface IMatrix<T> {
  readonly rowsCount: number;
  readonly colsCount: number;
  popCol(): void;
  pushCol(value: Vector<T>): void;
  popRow(): void;
  pushRow(value: Vector<T>): void;
  set(rowIndex: number, colIndex: number, value: T): void;
  get(rowIndex: number, colIndex: number): T;
}

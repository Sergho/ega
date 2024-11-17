import { IVector } from '../vectors/vector.interface';

export interface IMatrix<T> {
  readonly rowsCount: number;
  readonly colsCount: number;
  popCol(): void;
  pushCol(value: IVector<T>): void;
  popRow(): void;
  pushRow(value: IVector<T>): void;
  set(rowIndex: number, colIndex: number, value: T): void;
  get(rowIndex: number, colIndex: number): T;
  getRow(rowIndex: number): IVector<T>;
  clear(rowsCount: number, colsCount: number);
}

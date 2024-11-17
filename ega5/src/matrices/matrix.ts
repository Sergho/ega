import { MATRIX_ERRORS, VECTOR_ERRORS } from '../constants/exceptions';
import { IMatrix } from './matrix.interface';
import { Vector } from '../vectors/vector';
import { IVector } from '../vectors/vector.interface';

export class Matrix<T> implements IMatrix<T>, Iterable<IVector<T>> {
  private _rowsCount: number;
  private _colsCount: number;
  private _data: IVector<T>[];
  public get rowsCount(): number {
    return this._rowsCount;
  }
  public get colsCount(): number {
    return this._colsCount;
  }
  public constructor(data?: IVector<T>[]) {
    if (!data) {
      this._data = [new Vector<T>()];
      this._rowsCount = 1;
      this._colsCount = 1;
    } else {
      Object.assign(this, this.checkSize(data));
      this._data = data;
    }
  }
  public [Symbol.iterator](): Iterator<IVector<T>> {
    let counter = 0;
    return {
      next: () => {
        return {
          done: counter >= this._rowsCount,
          value: this._data[counter++],
        };
      },
    };
  }
  public popCol(): void {
    if (this._colsCount < 1) throw MATRIX_ERRORS.INCORRECT_SIZE;
    this._colsCount--;
  }
  public pushCol(col: IVector<T>): void {
    if (col.size !== this._rowsCount) throw MATRIX_ERRORS.INCORRECT_SIZE;

    for (let i = 0; i < col.size; i++) {
      this._data[i].push(col.get(i));
    }
  }
  public popRow(): void {
    if (this._rowsCount < 1) throw MATRIX_ERRORS.INCORRECT_SIZE;
    this._rowsCount--;
  }
  public pushRow(row: IVector<T>): void {
    if (row.size !== this._colsCount) throw MATRIX_ERRORS.INCORRECT_SIZE;

    this._data[this._rowsCount] = row;
    this._rowsCount++;
  }
  public set(rowIndex: number, colIndex: number, value: T): void {
    if (rowIndex >= this._rowsCount || rowIndex < 0)
      throw MATRIX_ERRORS.INCORRECT_INDEX;
    if (colIndex >= this._colsCount || colIndex < 0)
      throw MATRIX_ERRORS.INCORRECT_INDEX;
    this._data[rowIndex][colIndex] = value;
  }
  public get(rowIndex: number, colIndex: number): T {
    if (rowIndex >= this._rowsCount || rowIndex < 0)
      throw MATRIX_ERRORS.INCORRECT_INDEX;
    if (colIndex >= this._colsCount || colIndex < 0)
      throw MATRIX_ERRORS.INCORRECT_INDEX;
    return this._data[rowIndex][colIndex];
  }
  public getRow(rowIndex: number): IVector<T> {
    if (rowIndex >= this._rowsCount) throw VECTOR_ERRORS.INCORRECT_INDEX;
    return this._data[rowIndex];
  }
  private checkSize(data: IVector<T>[]): {
    _rowsCount: number;
    _colsCount: number;
  } {
    if (data.length === 0) throw MATRIX_ERRORS.INCORRECT_SIZE;

    let colsCount = 0;
    for (const column of data) {
      if (column.size === 0) throw MATRIX_ERRORS.INCORRECT_SIZE;

      if (colsCount === 0) {
        colsCount = column.size;
        continue;
      }
      if (colsCount !== column.size) throw MATRIX_ERRORS.INCORRECT_SIZE;
    }
    return {
      _rowsCount: data.length,
      _colsCount: colsCount,
    };
  }
}

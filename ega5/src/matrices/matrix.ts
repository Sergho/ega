import { MATRIX_ERRORS } from '../constants/exceptions';
import { IMatrix } from './matrix.interface';
import { Vector } from '../vectors/vector';

export class Matrix<T> implements IMatrix<T>, Iterable<Vector<T>> {
  private _rowsCount: number;
  private _colsCount: number;
  private _data: Vector<T>[];
  public get rowsCount(): number {
    return this._rowsCount;
  }
  public get colsCount(): number {
    return this._colsCount;
  }
  public constructor(data?: Vector<T>[]) {
    if (data === null) {
      this._data = [new Vector<T>()];
      this._rowsCount = 1;
      this._colsCount = 1;
    } else {
      Object.assign(this, this.checkSize(data));
      this._data = data;
    }
  }
  public [Symbol.iterator](): Iterator<Vector<T>> {
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
    this._colsCount--;
  }
  public pushCol(col: Vector<T>): void {
    if (col.size !== this._rowsCount) throw MATRIX_ERRORS.INCORRECT_SIZE;

    for (let i = 0; i < col.size; i++) {
      this._data[i].push(col.get(i));
    }
  }
  public popRow(): void {
    this._rowsCount--;
  }
  public pushRow(row: Vector<T>): void {
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
  private checkSize(data: Vector<T>[]): {
    rowsCount: number;
    colsCount: number;
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
      rowsCount: data.length,
      colsCount,
    };
  }
}

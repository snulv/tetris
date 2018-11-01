export const SOUTH = 'SOUTH';
export type SOUTH = SOUTH;
export const EAST = 'EAST';
export type EAST = EAST;
export const NORTH= 'NORTH';
export type NORTH= NORTH;
export const WEST= 'WEST';
export type WEST= WEST;

export default abstract class Shapes {
  abstract SOUTH_MATRIX: boolean[][];
  abstract EAST_MATRIX: boolean[][];
  abstract NORTH_MATRIX: boolean[][];
  abstract WEST_MATRIX: boolean[][];
  abstract LIST: {
    [SOUTH]: boolean[][],
    [EAST]: boolean[][],
    [NORTH]: boolean[][],
    [WEST]: boolean[][],
  };

  public run(direction: EAST | EAST | NORTH | WEST, func: (col?: boolean, yIndex?: number, xIndex?: number, row?: boolean[]) => any) {
    this.LIST[direction].forEach((row, yIndex) => {
      row.forEach((col, xIndex) => {
        func(col, yIndex, xIndex, row);
      })
    });
  }

  public abstract getRelativeY(y: number, direction: SOUTH | EAST | NORTH | WEST): number;
  public abstract getRelativeX(x: number, direction: SOUTH | EAST | NORTH | WEST): number;

  constructor () {
    this.LIST = {
      [SOUTH]: this.SOUTH_MATRIX,
      [EAST]: this.EAST_MATRIX,
      [NORTH]: this.NORTH_MATRIX,
      [WEST]: this.WEST_MATRIX,
    }
  }
}
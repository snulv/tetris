import Shapes, {EAST, NORTH, SOUTH, WEST} from "./Shapes";

export default class ZShape extends Shapes {

  SOUTH_MATRIX = [
    [false, true],
    [true, true],
    [true, false],
    [false, false],
  ];

  EAST_MATRIX = [
    [true, true, false, false],
    [false, true, true, false],
  ];

  NORTH_MATRIX = [
    [false, true],
    [true, true],
    [true, false],
    [false, false],
  ];

  WEST_MATRIX = [
    [true, true, false, false],
    [false, true, true, false],
  ];

  LIST = {
    [SOUTH]: this.SOUTH_MATRIX,
    [EAST]: this.EAST_MATRIX,
    [NORTH]: this.NORTH_MATRIX,
    [WEST]: this.WEST_MATRIX,
  };

  public getRelativeY(y: number, direction: SOUTH | EAST | NORTH | WEST): number {
    switch (direction) {
      case SOUTH:
        return y-1;
      case EAST:
        return y;
      case NORTH:
        return y-1;
      case WEST:
        return y;
    }
  }

  public getRelativeX(x: number, direction: SOUTH | EAST | NORTH | WEST): number {
    switch (direction) {
      case SOUTH:
        return x-1;
      case EAST:
        return x-1;
      case NORTH:
        return x-1;
      case WEST:
        return x-1;
    }
  }

  constructor () {
    super();
  }
}
import Shapes, {EAST, NORTH, SOUTH, WEST} from "./Shapes";

export default class OShape extends Shapes {

  SOUTH_MATRIX = [
    [true, true],
    [true, true],
    [false, false],
    [false, false],
  ];

  EAST_MATRIX = [
    [true, true, false, false],
    [true, true, false, false],
  ];

  NORTH_MATRIX = [
    [true, true],
    [true, true],
    [false, false],
    [false, false],
  ];

  WEST_MATRIX = [
    [true, true, false, false],
    [true, true, false, false],
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
        return y;
      case EAST:
        return y;
      case NORTH:
        return y;
      case WEST:
        return y;
    }
  }

  public getRelativeX(x: number, direction: SOUTH | EAST | NORTH | WEST): number {
    switch (direction) {
      case SOUTH:
        return x;
      case EAST:
        return x;
      case NORTH:
        return x;
      case WEST:
        return x;
    }
  }

  constructor () {
    super();
  }
}
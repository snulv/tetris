import Shapes, {EAST, NORTH, SOUTH, WEST} from "./Shapes";

export default class IShape extends Shapes {

  SOUTH_MATRIX = [
    [true, false],
    [true, false],
    [true, false],
    [true, false],
  ];

  EAST_MATRIX = [
    [false, false, false, false],
    [true, true, true, true],
  ];

  NORTH_MATRIX = [
    [true, false],
    [true, false],
    [true, false],
    [true, false],
  ];

  WEST_MATRIX = [
    [false, false, false, false],
    [true, true, true, true],
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
        return y-1;
      case NORTH:
        return y-1;
      case WEST:
        return y-1;
    }
  }

  public getRelativeX(x: number, direction: SOUTH | EAST | NORTH | WEST): number {
    switch (direction) {
      case SOUTH:
        return x;
      case EAST:
        return x-1;
      case NORTH:
        return x;
      case WEST:
        return x-1;
    }
  }

  constructor () {
    super();
  }
}
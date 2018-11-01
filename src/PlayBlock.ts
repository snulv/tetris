import Matrix from "./Matrix";
import Shapes, {EAST, NORTH, SOUTH, WEST} from "./shapes/Shapes";
import LShape from "./shapes/LShape";
import IShape from "./shapes/IShape";
import JShape from "./shapes/JShape";
import OShape from "./shapes/OShape";
import TShape from "./shapes/TShape";
import SShape from "./shapes/SShape";
import ZShape from "./shapes/ZShape";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default class PlayBlock {
  public x: number;
  public y: number;
  private shape: Shapes;
  private rotation: SOUTH | EAST | NORTH | WEST;

  static SHAPE_ARRAY = [
    IShape,
    LShape,
    JShape,
    OShape,
    TShape,
    SShape,
    ZShape,
  ];

  constructor(x: number, y: number, shape?: Shapes, rotation?: SOUTH | EAST | NORTH | WEST) {
    this.x = x;
    this.y = y;
    this.shape = shape ? shape : new PlayBlock.SHAPE_ARRAY[getRandomInt(0, PlayBlock.SHAPE_ARRAY.length - 1)]();
    this.rotation = rotation ? rotation : EAST;
  }

  rotate(matrix: Matrix) {
    switch (this.rotation) {
      case SOUTH:
        this.rotation = WEST;
        break;
      case EAST:
        this.rotation = SOUTH;
        break;
      case NORTH:
        this.rotation = EAST;
        break;
      case WEST:
        this.rotation = NORTH;
        break;
    }

    let hasCollision = false;
    let relativeX = this.shape.getRelativeX(this.x, this.rotation);
    let relativeY = this.shape.getRelativeY(this.y, this.rotation);
    this.shape.run(this.rotation, (col: boolean, yIndex?: number, xIndex?: number) => {
      if (col && matrix.checkForCollision(relativeX + xIndex, relativeY + yIndex)) {
        hasCollision = true;
      }
    });

    if (hasCollision) {
      switch (this.rotation) {
        case SOUTH:
          this.rotation = EAST;
          break;
        case EAST:
          this.rotation = NORTH;
          break;
        case NORTH:
          this.rotation = WEST;
          break;
        case WEST:
          this.rotation = SOUTH;
          break;
      }
    }
  }

  drop(matrix: Matrix) {
    if (!this.move(matrix, 0, 1)) {
      // If it doesn't drop we add it to the matrix
      this.addToMatrix(matrix);
      return false;
    }
    return true;
  }

  moveLeft(matrix) {
    return this.move(matrix, -1, 0);
  }

  moveRight(matrix) {
    return this.move(matrix, 1, 0);
  }

  move(matrix: Matrix, xDelta: number, yDelta: number) {
    let hasCollision = false;
    let relativeX = this.shape.getRelativeX(this.x, this.rotation);
    let relativeY = this.shape.getRelativeY(this.y, this.rotation);
    this.shape.run(this.rotation, (col: boolean, yIndex?: number, xIndex?: number) => {
      if (col && matrix.checkForCollision(relativeX + xIndex + xDelta, relativeY + yIndex + yDelta)) {
        hasCollision = true;
      }
    });

    if (!hasCollision) {
      this.y = this.y + yDelta;
      this.x = this.x + xDelta;
    }

    return !hasCollision;
  }

  addToMatrix(matrix: Matrix) {
    let relativeX = this.shape.getRelativeX(this.x, this.rotation);
    let relativeY = this.shape.getRelativeY(this.y, this.rotation);
    this.shape.run(this.rotation, (col: boolean, yIndex?: number, xIndex?: number) => {
      if (col) {
        matrix.addBlock((relativeX + xIndex),(relativeY + yIndex));
      }
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    let relativeX = this.shape.getRelativeX(this.x, this.rotation);
    let relativeY = this.shape.getRelativeY(this.y, this.rotation);
    this.shape.run(this.rotation, (col: boolean, yIndex?: number, xIndex?: number) => {
      if (col) {
        ctx.fillStyle="#7b50ff";
        ctx.fillRect((relativeX + xIndex) * 50,(relativeY + yIndex) * 50,50,50);
        ctx.rect((relativeX + xIndex) * 50,(relativeY + yIndex) * 50,50,50);
      }
    });
    ctx.stroke();
  }
}
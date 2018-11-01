import PlayBlock from "./PlayBlock";

const initializeMatrix = () => {
  return Array.apply(null, Array(Matrix.MATRIX_MAX_Y)).map(() => {
    return Array.apply(null, Array(Matrix.MATRIX_MAX_X)).map(() => {
      return null;
    });
  });
};

export default class Matrix {
  static MATRIX_MAX_X = 10;
  static MATRIX_MAX_Y = 15;

  playBlock: PlayBlock;

  matrix: null[][] | boolean[][];

  constructor () {
    this.matrix = initializeMatrix();
    this.playBlock = new PlayBlock(5, 1)
  }

  checkForCollision(x: number, y: number) {
    if (y >= Matrix.MATRIX_MAX_Y - 1 || x < 0 || x >= Matrix.MATRIX_MAX_X) {
      return true;
    }
    return this.matrix[y][x];
  }

  addBlock(x: number, y: number) {
    this.matrix[y][x] = true;
  }

  checkForAndRemoveFullLines() {
    const fullLines = [];
    this.matrix.forEach((row, yIndex) => {
      let isLineFull = true;
      row.forEach((col) => {
        if (!col) {
          isLineFull = false;
        }
      });
      if (isLineFull) {
        fullLines.push(yIndex);
      }
    });
    fullLines.forEach((index) => {
      this.matrix.splice(index, 1);
      this.matrix.unshift(Array.apply(null, Array(Matrix.MATRIX_MAX_X)).map(() => {
        return null;
      }));
    })
  }

  checkFailConditions(): boolean {
    let isFailed = false;
    this.matrix[0].forEach((col) => {
      if (col) {
        isFailed = true;
      }
    });
    return isFailed;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.matrix.forEach((row: null[] | boolean[], yIndex: number) => {
      row.forEach((col: null | boolean, xIndex: number) => {
        if (col) {
          ctx.fillStyle="#FF0000";
          ctx.fillRect(xIndex * 50,yIndex * 50,50,50);
          ctx.rect(xIndex * 50,yIndex * 50,50,50);
          ctx.stroke();
        }
      });
    });
    this.playBlock.draw(ctx);
  }

  drop() {
    if(this.playBlock.drop(this)) {
      return; // Do nothing if it drops
    }
    this.playBlock = new PlayBlock(5, 1)
  }
}
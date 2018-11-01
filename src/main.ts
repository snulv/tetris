import Matrix from './Matrix';
import PlayBlock from "./PlayBlock";
import {onKeyDown, onKeyUp} from "./MovementHandler";

var canvas: HTMLCanvasElement = document.getElementById("main-container") as HTMLCanvasElement;

var ctx: CanvasRenderingContext2D = canvas.getContext("2d");

let playing = true;

const FPS = 60;
const MS_IN_A_FRAME = 1000 / FPS;
const DROP_SPEED = 500;

let matrix: Matrix;
let timeSinceLastDrop;

document.addEventListener('keydown', (event) => {
  onKeyDown(event, matrix);
}, false);
document.addEventListener('keyup', (event) => {
  onKeyUp(event);
}, false);


startNewGame();

export default function main() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  matrix.checkForAndRemoveFullLines();
  moveBlock();

  matrix.draw(ctx);

  if(matrix.checkFailConditions()) {
    startNewGame();
  }

  if (playing) {
    setTimeout(main, MS_IN_A_FRAME);
  }
}

function startNewGame() {
  matrix = new Matrix();
  timeSinceLastDrop = DROP_SPEED;
}

function moveBlock() {
  // Check if we should drop object
  if (timeSinceLastDrop > 0) {
    timeSinceLastDrop -= MS_IN_A_FRAME;
    return;
  }
  timeSinceLastDrop = DROP_SPEED;

  matrix.drop();

}
import Matrix from './Matrix';
import PlayBlock from "./PlayBlock";
import {onKeyDown, onKeyUp} from "./MovementHandler";

var canvas: HTMLCanvasElement = document.getElementById("main-container") as HTMLCanvasElement;

var ctx: CanvasRenderingContext2D = canvas.getContext("2d");

let playing = true;

const FPS = 60;
const MS_IN_A_FRAME = 1000 / FPS;
const DROP_SPEED = 500;

let matrix;
let playBlock;
let timeSinceLastDrop;

document.addEventListener('keydown', (event) => {
  onKeyDown(event, playBlock, matrix);
}, false);
document.addEventListener('keyup', (event) => {
  onKeyUp(event);
}, false);


startNewGame();

export default function main() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();

  moveBlock();
  playBlock.draw(ctx);
  matrix.draw(ctx);

  if (playing) {
    setTimeout(main, MS_IN_A_FRAME);
  }
}

function startNewGame() {
  matrix = new Matrix();
  playBlock = new PlayBlock(5, 1);
  timeSinceLastDrop = DROP_SPEED;
}

function moveBlock() {
  // Check if we should drop object
  if (timeSinceLastDrop > 0) {
    timeSinceLastDrop -= MS_IN_A_FRAME;
    return;
  }
  timeSinceLastDrop = DROP_SPEED;
  if(playBlock.drop(matrix)) {
    return; // Do nothing if it drops
  }
  if(playBlock.y <= 1) {
    startNewGame();
    return; // startNewGame is it doesn't drop and is in the top
  }
  playBlock = new PlayBlock(5, 1)
}
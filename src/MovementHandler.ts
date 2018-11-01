import PlayBlock from "./PlayBlock";
import Matrix from "./Matrix";

export function onKeyDown(event, playBlock: PlayBlock, matrix: Matrix) {
  const keyName = event.key;

  // console.log(keyName);

  switch (keyName) {
    case 'ArrowUp':
      console.log('isPressedUp');
      playBlock.rotate(matrix);
      break;
    case 'ArrowRight':
      playBlock.moveRight(matrix);
      break;
    case 'ArrowDown':
      playBlock.drop(matrix);
      break;
    case 'ArrowLeft':
      playBlock.moveLeft(matrix);
      break;
  }
}

export function onKeyUp(event) {
  // const keyName = event.key;
}
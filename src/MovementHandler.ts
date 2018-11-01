import Matrix from "./Matrix";

export function onKeyDown(event, matrix: Matrix) {
  const keyName = event.key;

  // console.log(keyName);

  switch (keyName) {
    case 'ArrowUp':
      matrix.playBlock.rotate(matrix);
      break;
    case 'ArrowRight':
      matrix.playBlock.moveRight(matrix);
      break;
    case 'ArrowDown':
      matrix.drop();
      break;
    case 'ArrowLeft':
      matrix.playBlock.moveLeft(matrix);
      break;
  }
}

export function onKeyUp(event) {
  // const keyName = event.key;
}
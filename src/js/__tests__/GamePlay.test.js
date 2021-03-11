import GamePlay from '../GamePlay';

test('board should be rendered', () => {
  document.body.innerHTML = '<div class="board"></div>';
  const gamePlay = new GamePlay();
  gamePlay.renderBoard();
  expect(document.querySelector('.cells')).toBeTruthy();
  expect(gamePlay.cells.length).toBe(16);
  expect(document.querySelector('.cell').className).toBe('cell');
});

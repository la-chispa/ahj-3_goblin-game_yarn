import GameController from '../GameController';

test('', () => {
  const gamePlay = {
    boardSize: 4,
    board: null,
    boardEl: null,
    cells: [],
    stop: false,
  };
  const gameCtrl = new GameController(gamePlay);
  expect(gameCtrl).toBeTruthy();
});

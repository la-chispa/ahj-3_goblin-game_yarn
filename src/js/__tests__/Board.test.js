import Board from '../Board';

test('render board', () => {
  document.body.innerHTML = '<div class="board"></div>';
  const board = new Board();
  board.render();
  expect(document.querySelector('.cells')).toBeTruthy();
  expect(board.cells.length).toBe(25);
  expect(document.querySelector('.cell').className).toBe('cell');
});

test('get cell', () => {
  document.body.innerHTML = '<div class="board"></div>';
  const board = new Board();
  board.render();
  expect(board.getCell(0)).toBe(board.cells[0]);
  expect(board.getCell(10)).toBe(board.cells[10]);
});

test('deactivate cell', () => {
  document.body.innerHTML = '<div class="board"></div>';
  const board = new Board();
  board.render();
  board.cells[1].classList.add('cell_has-goblin');
  board.deactivateCell(1);
  expect(board.cells[1].classList.contains('cell_has-goblin')).toBeFalsy();
});

test('activate cell', () => {
  document.body.innerHTML = '<div class="board"></div>';
  const board = new Board();
  board.render();
  board.activateCell(1);
  expect(board.cells[1].classList.contains('cell_has-goblin')).toBeTruthy();
});

test('move', () => {
  document.body.innerHTML = '<div class="board"></div>';
  const board = new Board();
  board.render();
  board.move(1, 3);
  expect(board.cells[1].classList.contains('cell_has-goblin')).toBeFalsy();
  expect(board.cells[3].classList.contains('cell_has-goblin')).toBeTruthy();
  expect(board.activeCell === 3);
});

jest.useFakeTimers();

test('next', () => {
  document.body.innerHTML = '<div class="board"></div>';
  const board = new Board();
  board.render();
  board.activeCell = 0;
  board.next();
  expect(setTimeout).toHaveBeenCalledTimes(1);
});

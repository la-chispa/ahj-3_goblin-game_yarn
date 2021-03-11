export default class GamePlay {
  constructor() {
    this.boardSize = 4;
    this.board = null;
    this.boardEl = null;
    this.cells = [];
    this.stop = false;
  }

  renderBoard() {
    this.board = document.querySelector('.board');
    this.boardEl = document.createElement('div');
    this.boardEl.classList.add('cells');
    this.board.appendChild(this.boardEl);

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      this.boardEl.appendChild(cellEl);
      this.cells.push(cellEl);
    }
  }

  getCell(index) {
    return this.cells[index];
  }

  deactivateCell(index) {
    this.getCell(index).classList.remove('cell_has-goblin');
  }

  activateCell(index) {
    this.getCell(index).classList.add('cell_has-goblin');
  }

  next() {
    setTimeout(() => {
      if (this.stop === true) {
        return;
      }
      const nextCell = Math.floor(Math.random() * this.cells.length);
      if (nextCell !== this.activeCell) {
        this.deactivateCell(this.activeCell);
        this.activeCell = nextCell;
        this.activateCell(this.activeCell);
        this.next();
      } else {
        this.next();
      }
    }, 1000);
  }
}

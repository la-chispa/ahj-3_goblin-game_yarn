export default class Board {
  constructor() {
    this.boardSize = 4;
    this.cells = [];
    this.stop = false;
  }

  render() {
    this.container = document.querySelector('.board');
    const boardEl = document.createElement('div');
    boardEl.classList.add('cells');
    this.container.appendChild(boardEl);

    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      boardEl.appendChild(cell);
      this.cells.push(cell);
    }

    this.activeCell = Math.floor(Math.random() * this.cells.length);
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
        this.move(this.activeCell, nextCell);
        this.next();
      } else {
        this.next();
      }
    }, 1000);
  }

  move(prev, next) {
    this.deactivateCell(prev);
    this.activeCell = next;
    this.activateCell(next);
  }
}

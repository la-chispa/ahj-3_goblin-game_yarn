export default class Control {
  constructor(board, counters, popup) {
    this.board = board;
    this.counters = counters;
    this.popup = popup;
  }

  init() {
    this.counters.render();
    this.board.render();
    this.board.next();
    this.popup.render();
    this.addCellsListener();
    this.addBtnListeners();
  }

  addCellsListener() {
    this.board.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('cell_has-goblin')) {
        this.counters.addValue('success');
        this.checkWin();
      } else {
        this.counters.addValue('fail');
        this.checkFail();
      }
    });
  }

  checkWin() {
    if (this.counters.successValue === 10) {
      this.board.stop = true;
      this.popup.show();
    }
  }

  checkFail() {
    if (this.counters.failValue === 5) {
      this.board.stop = true;
      this.popup.show('red', 'Вы проиграли. Начнём заново?');
    }
  }

  addBtnListeners() {
    this.btns = Array.from(document.getElementsByClassName('reset'));
    for (const btn of this.btns) {
      btn.addEventListener('click', () => {
        window.location.reload();
      });
    }
  }
}

export default class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.success = 0;
    this.fail = 0;
    this.modal = document.querySelector('.modal');
  }

  init() {
    this.gamePlay.renderBoard();
    this.gamePlay.activeCell = Math.floor(Math.random() * this.gamePlay.cells.length);
    this.gamePlay.next();
    this.setMoveListeners();
    this.setResetListeners();
  }

  setMoveListeners() {
    for (const cell of this.gamePlay.cells) {
      cell.addEventListener('click', (e) => {
        if (e.target.classList.contains('cell_has-goblin')) {
          this.success += 1;
          const success = document.querySelector('.success-counter-value');
          success.textContent = this.success;
          this.checkWin();
        } else {
          this.fail += 1;
          const fail = document.querySelector('.fail-counter-value');
          fail.textContent = this.fail;
          this.checkFail();
        }
      });
    }
  }

  checkWin() {
    if (this.success === 10) {
      this.gamePlay.stop = true;
      this.text = 'Вы поймали всех гоблинов!\nОтпустите их и давайте ещё разок.';
      this.showModal();
    }
  }

  checkFail() {
    if (this.fail === 5) {
      this.gamePlay.stop = true;
      this.text = 'Вы проиграли.\nНачнём заново?';
      this.showModal('red');
    }
  }

  showModal(color = 'green') {
    this.modal.classList.add('modal_active');
    this.modal.querySelector('.modal-text').textContent = this.text;
    document.querySelector('.modal-btn').style.backgroundColor = color;
  }

  setResetListeners() {
    this.btns = Array.from(document.getElementsByClassName('reset'));
    for (const btn of this.btns) {
      btn.addEventListener('click', () => {
        if (this.modal.classList.contains('modal_active')) {
          this.modal.classList.remove('modal_active');
        }
        window.location.reload();
      });
    }
  }
}

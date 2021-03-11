export default class Popup {
  constructor() {
    this.modal = document.querySelector('.modal');
  }

  render() {
    this.modal.innerHTML = `
      <div class="modal-content">
        <span class="modal-text"></span>
        <div class="reset modal-btn">С начала</div>
      </div>
    `;
  }

  show(color = 'green', text = 'Вы поймали всех гоблинов! Отпустите их и давайте ещё разок.') {
    this.modal.classList.add('modal_active');
    this.modal.querySelector('.modal-text').textContent = text;
    document.querySelector('.modal-btn').style.backgroundColor = color;
  }
}

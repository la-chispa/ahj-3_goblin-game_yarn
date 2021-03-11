export default class Counters {
  constructor() {
    this.successValue = 0;
    this.failValue = 0;
  }

  render() {
    this.container = document.querySelector('.counters');
    this.container.innerHTML = `
      <div class="counter succes-counter">
        <div class="counter-description"> Пойманы: </div>
        <div class="counter-value success-counter-value">${this.successValue}</div>
      </div>
      <div class="counter fail-counter">
        <div class="counter-description"> Увернулись: </div>
        <div class="counter-value fail-counter-value">${this.failValue}</div>
      </div>
    `;
    this.success = document.querySelector('.success-counter-value');
    this.fail = document.querySelector('.fail-counter-value');
  }

  addValue(arg) {
    this[`${arg}Value`] += 1;
    this[arg].textContent = this[`${arg}Value`];
  }
}

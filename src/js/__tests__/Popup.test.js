import Popup from '../Popup';

test('render popup', () => {
  document.body.innerHTML = '<div class="modal"></div>';
  const popup = new Popup();
  popup.render();
  expect(document.querySelector('.modal-content')).toBeTruthy();
  expect(document.querySelector('.modal-text')).toBeTruthy();
  expect(document.querySelector('.modal-btn')).toBeTruthy();
});

test('show popup, default', () => {
  document.body.innerHTML = '<div class="modal"></div>';
  const popup = new Popup();
  popup.render();
  popup.show();
  expect(popup.modal.classList.contains('modal_active')).toBeTruthy();
  expect(popup.modal.querySelector('.modal-text').textContent).toBe('Вы поймали всех гоблинов! Отпустите их и давайте ещё разок.');
  expect(popup.modal.querySelector('.modal-btn').style.backgroundColor).toBe('green');
});

test('show popup, custom', () => {
  document.body.innerHTML = '<div class="modal"></div>';
  const popup = new Popup();
  popup.render();
  popup.show('red', 'Мда, охотой вам не прожить.');
  expect(popup.modal.classList.contains('modal_active')).toBeTruthy();
  expect(popup.modal.querySelector('.modal-text').textContent).toBe('Мда, охотой вам не прожить.');
  expect(popup.modal.querySelector('.modal-btn').style.backgroundColor).toBe('red');
});

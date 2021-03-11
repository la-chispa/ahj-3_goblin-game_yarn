import Counters from '../Counters';

test('render counters', () => {
  document.body.innerHTML = '<div class="counters"></div>';
  const counters = new Counters();
  counters.render();
  expect(document.querySelectorAll('.counter')).toBeTruthy();
  expect(document.querySelectorAll('.counter').length).toBe(2);
});

test('counter value', () => {
  document.body.innerHTML = '<div class="counters"></div>';
  const counters = new Counters();
  counters.successValue = 6;
  counters.failValue = 1;
  counters.render();
  const success = document.querySelector('.success-counter-value').textContent;
  const fail = document.querySelector('.fail-counter-value').textContent;
  expect(success).toBe('6');
  expect(fail).toBe('1');
});

test('add fail', () => {
  document.body.innerHTML = '<div class="counters"></div>';
  const counters = new Counters();
  counters.render();
  counters.addValue('fail');
  const counter = document.querySelector('.fail-counter-value').textContent;
  expect(counters.failValue).toBe(1);
  expect(counter).toBe('1');
});

test('add success', () => {
  document.body.innerHTML = '<div class="counters"></div>';
  const counters = new Counters();
  counters.render();
  counters.addValue('success');
  const counter = document.querySelector('.success-counter-value').textContent;
  expect(counters.successValue).toBe(1);
  expect(counter).toBe('1');
});

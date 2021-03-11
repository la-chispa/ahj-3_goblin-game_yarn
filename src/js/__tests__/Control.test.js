import Control from '../Control';
import Board from '../Board';
import Counters from '../Counters';
import Popup from '../Popup';

test('create obj', () => {
  const ctrl = new Control(new Board(), new Counters(), new Popup());
  expect(ctrl).toBeTruthy();
});

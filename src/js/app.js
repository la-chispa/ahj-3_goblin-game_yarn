import Board from './Board';
import Counters from './Counters';
import Control from './Control';
import Popup from './Popup';

const counters = new Counters();
const board = new Board();
const popup = new Popup();
const ctrl = new Control(board, counters, popup);
ctrl.init();

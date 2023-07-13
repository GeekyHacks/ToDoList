import './styles/sass/main.sass';
import refresh from './assets/refresh.png';
import dots from './assets/three-dots.png';
import enter from './assets/enter.png';
import trashCan from './assets/trash-can.png';
import DisplayTasks from './displayList.js';

const refreshImg = refresh;

const dotsImg = dots;

const trashCanImg = trashCan;

const taskList = new DisplayTasks();

const enterImg = enter;

export { refreshImg, dotsImg, enterImg, trashCanImg };

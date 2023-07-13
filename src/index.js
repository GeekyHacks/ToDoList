import './styles/main.sass';
import refresh from './assets/refresh.png';
import dots from './assets/three-dots.png';
import enter from './assets/enter.png';
import tarshCan from './assets/trash-can.png';

const refreshImg = refresh;

const dotsImg = dots;

const tarshCanImg = tarshCan;


import TaskList from './displayList.js';

const taskList = new TaskList();
taskList.init();

const enterImg = enter;

export { refreshImg, dotsImg, enterImg, tarshCanImg };

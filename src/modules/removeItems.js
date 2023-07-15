// import DisplayTasks from './modules/displayList.js';
// const trashCanImg = trashCan;
// import { renderList, tasksList } from './displayList.js';
// import { taskarr } from './addTask.js';

export default (taskarr, index) => {
  let i = index;

  while (i < taskarr.length) {
    taskarr[i].index = i;

    i += 1;
    taskarr.splice(index, 1);
  }
  localStorage.setItem('taskarr', JSON.stringify(taskarr));

  return taskarr;
};

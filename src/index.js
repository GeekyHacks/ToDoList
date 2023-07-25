import './styles/sass/main.sass';
import './assets/refresh.png';
import './assets/enter.png';
import './assets/trash-can.png';
import { addTask, taskarr } from './modules/addTask.js';
import renderList from './modules/displayList.js';
import './assets/three-dots.png';
import removeItems from './modules/removeItems.js';
import { TaskStatus, recallChecked } from './modules/updateStatus.js';
import { saveData } from './modules/userInput.js';
const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('#addBtn');
const refresh = document.querySelector('#recyclImg');

renderList(taskarr);
// this is to reload the page whenever needed
const reloading = () => {
  setInterval(document.location.reload());
};

// this is for the refresh icon 
refresh.addEventListener('click', () => reloading());

TaskStatus.updateStatus();
TaskStatus.clearCompleted();

// add tasks
addBtn.addEventListener('click', (event) => {
  const description = userInput.value;
  const index = taskarr.length;
  if (description === '') {
    return null;
  }
  addTask(description, index);
  reloading(taskarr);
  return event.preventDefault();
});
userInput.addEventListener('keypress', (event) => {
  const description = userInput.value;
  const index = taskarr.length;
  if (description === '') {
    return null;
  }

  if (event.key === 'Enter' && userInput.value !== '') {
    addTask(description, index);
    reloading();
    event.preventDefault();
    saveData(taskarr);

    return taskarr;
  }
  return taskarr;
});

// remove tasks
document.addEventListener('click', (event) => {
  const dotsTrash = document.querySelectorAll('.trash');

  dotsTrash.forEach((icon, index) => {
    if (event.target === icon) {
      removeItems(taskarr, index);
      saveData(taskarr);

      // this will sort out the index when removing Items
      const sortedArr = [...taskarr];
      index = taskarr.length + 1;
      sortedArr.sort((a, b) => a.index - b.index);

      reloading(taskarr);
      saveData(sortedArr);
    }
  });
});

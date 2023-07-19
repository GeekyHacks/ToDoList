import './styles/sass/main.sass';
import './assets/refresh.png';
import './assets/enter.png';
import { addTask, taskarr } from './modules/addTask.js';
import renderList from './modules/displayList.js';
import './assets/three-dots.png';
import removeItems from './modules/removeItems.js';

const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('#addBtn');
const clearAllBtn = document.querySelector('#clearAllBtn');

// to reload the page this should fix the double rendering issue
const reloading = () => {
  setInterval(document.location.reload());
};

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
    localStorage.setItem('taskarr', JSON.stringify(taskarr));
    return taskarr;
  }
  return taskarr;
});
renderList(taskarr);

// remove tasks
document.addEventListener('click', (event) => {
  const dotsTrash = document.querySelectorAll('.dotsImg');
  dotsTrash.forEach((icon, index) => {
    if (event.target === icon) {
      removeItems(taskarr, index);
      localStorage.setItem('taskarr', JSON.stringify(taskarr));

  // this will sort out the index when removing Items
      const sortedArr = [...taskarr];
      index = taskarr.length;
      console.log(index);
      sortedArr.sort((a, b) => a.index - b.index);

      reloading(sortedArr);
      localStorage.setItem('taskarr', JSON.stringify(sortedArr));
    }
  });
  // return event.preventDefault();
});

// // this will clear all localstorage elements too, just temproary
clearAllBtn.addEventListener('click', () => {
  window.localStorage.clear();
  reloading();
});

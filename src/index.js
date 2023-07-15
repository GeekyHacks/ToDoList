import './styles/sass/main.sass';
import refreshImg from './assets/refresh.png';
import enterImg from './assets/enter.png';
import { addTask, taskarr } from './modules/addTask';
import { renderList, tasksList } from './modules/displayList.js';
import dotsImg from './assets/three-dots.png';
import { removeTask } from './modules/removeItems.js';
const addBtn = document.querySelector('#addBtn');
const clearAllBtn = document.querySelector('#clearAllBtn');

enterImg;
refreshImg;
dotsImg;

// to reload the page this should fix the double rendering issue
const reloading = () => {
  setInterval(document.location.reload());
};

addBtn.addEventListener('click', () => {
  const description = userInput.value;
  const index = taskarr.length;
  if (description === '') {
    return null;
  }
  addTask(description, index);
  reloading();
});
renderList(taskarr);

document.addEventListener('click', (event) => {
  const removeItem = document.querySelectorAll('.dotsImg');
  removeItem.forEach((icon, index) => {
    if (event.target === icon) {
      removeTask(taskarr, index);
      reloading();
    }
  });
});

// // this will clear all localstorage elements too, just temproary
// clearAllBtn.addEventListener('click', () => window.localStorage.clear());

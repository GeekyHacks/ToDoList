import './styles/sass/main.sass';
import './assets/refresh.png';
import './assets/enter.png';
import { addTask, taskarr } from './modules/addTask.js';
import renderList from './modules/displayList.js';
import './assets/three-dots.png';
import trash from './styles/sass/trash-can.png';
import removeTask from './modules/removeItems.js';

const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('#addBtn');
const clearAllBtn = document.querySelector('#clearAllBtn');

// to reload the page this should fix the double rendering issue
const reloading = () => {
  setInterval(document.location.reload());
};

addBtn.addEventListener('click', (event) => {
  const description = userInput.value;
  const index = taskarr.length;
  if (description === '') {
    return null;
  }
  addTask(description, index);
  reloading();
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
    return taskarr;
  }
});
renderList(taskarr);

document.addEventListener('click', (event) => {
  const dots_trash = document.querySelectorAll('.dotsImg');
  // dots_trash.forEach((icon, index) => {
  //   if (event.target === icon) {
  //     removeTask(taskarr, index);
  //     reloading();
  //   }
  // });

  const bgImg = document.querySelectorAll('.bgImg');
  bgImg.forEach((Image) => {
    if (event.target === Image) {
      const dots_trash = document.querySelectorAll('.dotsImg');
      dots_Trash.classList.add('hide');
      reloading();
    }
  });
});

// bgImg.addEventListener('click', () => {
//   const dots_Trash = document.querySelectorAll('.dotsImg');
//   dots_Trash.classList.remove('.dotsImg');
//   reloading();
// });

// // this will clear all localstorage elements too, just temproary
clearAllBtn.addEventListener('click', () => {
  window.localStorage.clear();
  reloading();
});

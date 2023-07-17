import './styles/sass/main.sass';
import './assets/refresh.png';
import './assets/enter.png';
import { addTask, taskarr } from './modules/addTask.js';
import renderList from './modules/displayList.js';
import './assets/three-dots.png';
import removeTask from './modules/removeItems.js';
import update from './modules/update.js';

const taskDescription = document.querySelectorAll('#addItem');

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
renderList(taskarr);

document.addEventListener('click', (event) => {
  const removeItem = document.querySelectorAll('.dotsImg');
  removeItem.forEach((icon, index) => {
    if (event.target === icon) {
      removeTask(taskarr, index);
      reloading();
    }
  });

  // taskDescription.forEach((input, index) => {
  //   if (event.target === input) {
  //     // const parentLi = event.target.parentNode;
  //     // parentLi.classList.add('edit-bg');
  //     taskDescription.addEventListener('change', () => {
  //     const newTask = task.textContent;
  //     task.textContent = newTask;
  //     update(taskarr, index, newTask);
  //     localStorage.setItem('taskarr', JSON.stringify(taskarr));
  //     });
  //   }
  // });

  // taskDescription.forEach((taskDescription) => {
  //   taskDescription.addEventListener('change', () => {
  //     update(taskDescription);
  //     localStorage.setItem('taskarr', JSON.stringify(taskarr));
  //   });

  //   reloading();
  // });

  // taskDescription.addEventListener('change', () => update());
});

// const userInput = document.querySelector('#userInput');

// // this will clear all localstorage elements too, just temproary
clearAllBtn.addEventListener('click', () => {
  window.localStorage.clear();
  reloading();
});

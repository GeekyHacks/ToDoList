import { taskarr } from './addTask.js';

const dots = '../assets/three-dots.png';
const trashCan = '../assets/trash-can.png';
const tasksList = document.querySelector('#tasksList');
const listItem = document.querySelectorAll('#newTask');
export default (task) => {
  for (let i = 0; i < taskarr.length; i += 1) {
    task = document.createElement('li');
    task.classList.add('newTask');
    if (taskarr[i].description !== '') {
      task.innerHTML = `
        <input type="checkbox" id="checkB" ${taskarr[i].completed} />
        <input class="newTasks" type="text" id="addItem" value="${taskarr[i].description}" />
        <img id="dotsImg" class="dotsImg" src="${dots}" alt="" />
        `;
      tasksList.appendChild(task);
      // localStorage.setItem("taskarr", JSON.stringify(taskarr));
    }

    if (taskarr[i].description === '') {
      tasksList.innerHTML = '';
    }
  }
  const taskDescription = document.querySelectorAll('#addItem');
  taskDescription.forEach((task, index) => {
    task.addEventListener('click', () => {
      task.classList.add('edit');
      // let object = taskarr[index];
    });
    task.addEventListener('change', () => {
      task.readOnly = false;
      task.classList.remove('edit');
      // let object = taskarr[index];
    });
    // the trick is with input
    task.addEventListener('input', () => {
      taskarr[index].description = task.value;
      localStorage.setItem('taskarr', JSON.stringify(taskarr));
    });
  });
};

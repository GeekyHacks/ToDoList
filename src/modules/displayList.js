import { taskarr } from './addTask.js';
import '../assets/trash-can.png';
import { saveData } from './userInput.js';

export const tasksList = document.querySelector('#tasksList');

export default (task) => {
  for (let i = 0; i < taskarr.length; i += 1) {
    task = document.createElement('li');
    task.classList.add('newTask');

    if (taskarr[i].description !== '' && taskarr[i].completed === true) {
      task.innerHTML = `
      <input type="checkbox" checked class="checkB" ${taskarr[i].completed} autocomplete="false"  />
      <input class="newTasks" type="text" id="addItem" value="${taskarr[i].description}" />
      <img class="trash" id="trash"  src="./assets/trash-can.png" alt="" />
   
      `;
    }
    if (taskarr[i].description !== '' && taskarr[i].completed === false) {
      task.innerHTML = `
      <input type="checkbox" class="checkB" ${taskarr[i].completed}  />
      <input class="newTasks" type="text" id="addItem" value="${taskarr[i].description}" />
      <img class="trash" id="trash"  src="./assets/three-dots.png" alt="" />
      `;
    }

    if (taskarr[i].description === '') {
      tasksList.innerHTML = '';
    }

    tasksList.appendChild(task);
  }

  const taskDescription = document.querySelectorAll('#addItem');

  taskDescription.forEach((task, index) => {
    task.addEventListener('click', (event) => {
      task.classList.add('edit');
      return event.preventDefault(task.classList.remove('edit'));
    });

    task.addEventListener('change', (event) => {
      event.preventDefault();
      task.readOnly = false;
      task.classList.remove('edit');

      return event.preventDefault();
    });
    // the trick is with input
    task.addEventListener('input', (event) => {
      event.preventDefault();
      taskarr[index].description = task.value;
      saveData(taskarr);
    });
  });
};

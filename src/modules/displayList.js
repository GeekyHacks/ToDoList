import { taskarr } from './addTask.js';
import '../assets/trash-can.png';
import { saveData } from './userInput.js';

export const tasksList = document.querySelector('#tasksList');

export default (task) => {
  for (let i = 0; i < taskarr.length; i += 1) {
    task = document.createElement('li');
    task.classList.add('newTask');

    if (taskarr[i].description !== '') {
      task.innerHTML = `
        <input type="checkbox" class="checkB" ${taskarr[i].completed} />
        <input class="newTasks" type="text" id="addItem" value="${taskarr[i].description}" />
        <img class="trash" id="trash"  src='./assets/trash-can.png' alt="" />
        <img class="dotsImg" id="dotsImg"  src='./assets/three-dots.png' alt="" />
        `;
    }
    if (taskarr[i].description === '') {
      tasksList.innerHTML = '';
    }

    tasksList.appendChild(task);
  }

  // const lis = document.querySelectorAll('.newTask');
  const taskDescription = document.querySelectorAll('#addItem');
  const dots = document.querySelectorAll('.dotsImg');

  dots.forEach((dot) => {
    dot.classList.add('hide');
  });

  taskDescription.forEach((task, index) => {
    task.addEventListener('click', (event) => {
      task.classList.add('edit');
      return event.preventDefault();
    });

    task.addEventListener('change', (event) => {
      task.readOnly = false;
      task.classList.remove('edit');

      return event.preventDefault();
    });
    // the trick is with input
    task.addEventListener('input', () => {
      taskarr[index].description = task.value;
      saveData(taskarr);
    });
  });
};

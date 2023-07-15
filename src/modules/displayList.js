import { taskarr } from './addTask.js';

const tasksList = document.querySelector('#tasksList');
const renderList = (task) => {
  for (let i = 0; i < taskarr.length; i++) {
    task = document.createElement('li');
    task.classList.add('newTask');
    if (taskarr !== '') {
      task.innerHTML = `
        <input type="checkbox" id="checkB" ${taskarr[i].completed ? true : false} />
        <p class="newTasks" id="addItem" />${taskarr[i].description}</p>
        <img id="dotsImg" class="dotsImg" src="./assets/three-dots.png" alt="" />
        `;
      tasksList.appendChild(task);
    }

    if (taskarr === '') {
      tasksList.innerHTML = '';
    }
  }
};
export { renderList, tasksList };

import { taskarr } from './addTask.js';

const tasksList = document.querySelector('#tasksList');
export default (task) => {
  for (let i = 0; i < taskarr.length; i += 1) {
    task = document.createElement('li');
    task.classList.add('newTask');
    if (taskarr !== '') {
      task.innerHTML = `
        <input type="checkbox" id="checkB" ${!!taskarr[i].completed} />
        <p class="newTasks" id="addItem" />${taskarr[i].description}</p>
        <img id="dotsImg" class="dotsImg" src="../assets/trash-can.png" alt="" />
        `;
      tasksList.appendChild(task);
    }

    if (taskarr === '') {
      tasksList.innerHTML = '';
    }
  }
};
// export default { renderList };

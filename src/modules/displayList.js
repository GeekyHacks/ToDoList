import { taskarr } from './addTask.js';
// import update from './update.js';
// export const dots = '../assets/three-dots.png';
const trash_can = '../assets/trash-can.png';

export const tasksList = document.querySelector('#tasksList');

export default (task) => {
  for (let i = 0; i < taskarr.length; i += 1) {
    task = document.createElement('li');
    task.classList.add('newTask');

    if (taskarr[i].description !== '') {
      task.innerHTML = `
        <input type="checkbox" id="checkB" ${taskarr[i].completed} />
        <input class="newTasks" type="text" id="addItem" value="${taskarr[i].description}" />
        <img class="dotsImg" id="dotsImg"  src="${trash_can}" alt="" />
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
      localStorage.setItem('taskarr', JSON.stringify(taskarr));
    });
  });
};

import { taskarr } from './addTask.js';

const dots = '../assets/three-dots.png';
const trashCan = '../assets/trash-can.png';
const tasksList = document.querySelector('#tasksList');

export default (task) => {
  for (let i = 0; i < taskarr.length; i += 1) {
    task = document.createElement('li');
    task.classList.add('newTask');
    if (taskarr !== '') {
      task.innerHTML = `
        <input type="checkbox" id="checkB" ${taskarr[i].completed} />
        <input class="newTasks" type="text" id="addItem" value="${taskarr[i].description}" />
        <img id="dotsImg" class="dotsImg" src="${dots}" alt="" />
        `;
      tasksList.appendChild(task);
      localStorage.setItem('taskarr', JSON.stringify(taskarr));
    }

    if (taskarr === '') {
      tasksList.innerHTML = '';
    }
  }

  const taskDescription = document.querySelectorAll('#addItem');
  taskDescription.forEach((task, index) => {
    task.addEventListener('click', () => {
      // taskDescription.value = taskarr[index].description;
      // const object = taskarr[index];
      task.readOnly = false;
      const editTask = taskarr[index].description;
      console.log('');
      const taskValue = (taskDescription.value = task.value);
      const newTask = editTask == taskValue;
      // const newdescription = task.value;

      // localStorage.setItem('taskarr', JSON.stringify(taskValue))
      // localStorage.setItem('taskarr', JSON.stringify(object))
      console.log(newTask);
      // localStorage.setItem('taskarr', JSON.stringify(taskarr));
    });

    // return taskarr;
  });
};

// export default { renderList };

// {
//   /* <p class="newTasks" id="addItem" />${taskarr[i].description}</p> */
// }

// const taskDescription = document.querySelectorAll('#addItem');
// taskDescription.forEach((task, index) => {
//   task.addEventListener('change', () => {

//     // taskDescription.value = taskarr[index].description;
//     const editTask = taskarr[index].description;
//     console.log(editTask);
//     const taskValue = (taskDescription.value = editTask);
//     localStorage.setItem('taskarr', JSON.stringify(taskarr));
//     console.log(taskValue);
//   });

//   // return taskarr;
// });

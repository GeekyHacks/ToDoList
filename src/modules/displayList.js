import { taskarr } from './addTask.js';
import update from './update.js';
export const dots = '../assets/three-dots.png';
import trash_can from '../assets/trash-can.png';

export const tasksList = document.querySelector('#tasksList');

export default (task) => {
  for (let i = 0; i < taskarr.length; i += 1) {
    task = document.createElement('li');
    task.classList.add('newTask');
    if (taskarr[i].description !== '') {
      task.innerHTML = `
        <input type="checkbox" id="checkB" ${taskarr[i].completed} />
        <input class="newTasks" type="text" id="addItem" value="${taskarr[i].description}" />
        <img class="dotsImg" src="${dots}" alt="" />
        
        `;

      console.log(task);

      tasksList.appendChild(task);
    }

    if (taskarr[i].description === '') {
      tasksList.innerHTML = '';
    }
  }

  // task.addEventListener('click', () => {
  //   console.log(task);
  //   const dots_Trash = document.querySelectorAll('.dotsImg');
  //   console.log(dots_Trash);
  //   const imgNode = dots_Trash.FirstChild;
  //   let newTAsk =task.removeChild(dots_Trash);
  //   tasksList.appendChild(newTAsk);
  //   console.log(newTAsk);

  //   dots_Trash.forEach((element) => {
  //     console.log(element);
  //     // dots_Trash.getAttribute('src');
  //     let currntSrc = dots_Trash.getAttribute('src');
  //     console.log(currntSrc);
  //   });
  //   task.removeChild(src);
  // });

  const taskDescription = document.querySelectorAll('#addItem');

  taskDescription.forEach((task, index) => {
    task.addEventListener('click', (event) => {
      console.log(task);
      
      task.classList.add('edit');

      event.preventDefault();
      
    });

    task.addEventListener('change', (event) => {
      task.readOnly = false;
      task.classList.remove('edit');
      event.preventDefault();
      return event.preventDefault();
      // let object = taskarr[index];
    });
    // the trick is with input
    task.addEventListener('input', () => {
      taskarr[index].description = task.value;
      localStorage.setItem('taskarr', JSON.stringify(taskarr));
    });
  });
};

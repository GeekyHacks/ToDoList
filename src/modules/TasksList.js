// import { TaskObject, taskarr } from './userInput.js';
// // import completedIsFalse from './removeItems.js';
// import dots from './assets/three-dots.png';

// const addedTasks = document.querySelector('#tasksList');
// const TasksList = () => {
//   addedTasks.innerHTML = '';
//   taskarr.forEach((task) => {
//     const newTask = document.createElement('li');
//     newTask.classList.add('newTask');
//     newTask.innerHTML = `
//       <input type="checkbox" id="checkB" ${task.completed ? 'checked' : 'unchecked'} />
//       <p class="newTasks" id="addItem" />${task.description}</p>
//       <img id="dotsImg" src="${dots}" alt="" />
//       `;
//     addedTasks.appendChild(newTask);
//   });
// };

// const DisplayTasks = () => {
//   TasksList();
// };

// DisplayTasks();

// const addBtn = document.getElementById('addBtn');
// addBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   TaskObject.addObject(task);
// });



// const input = document.querySelector('#userInput');

// class TaskList {
//   // tasks property will be add using the methods following
//   constructor() {
//     this.tasks = JSON.parse(localStorage.getItem('ToDolist')) || [];
//   }
//   init() {
//     const addBtn = document.getElementById('addBtn');
//     addBtn.addEventListener('click', (event) => {
//       event.preventDefault();
//       this.addingEventListener();
//     });

//     document.getElementById('userInput').addEventListener('keypress', (event) => {
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         this.addingEventListener();
//       }
//     });

//     const clearBtn = document.getElementById('clearBtn');
//     clearBtn.addEventListener('click', () => {
//       this.clearCompleted();
//     });

//     window.addEventListener('load', () => {
//       this.renderList();
//     });
//   }

//   addingEventListener() {
//     const description =
// document.getElementById('userInput').value;
//     if (description !== '') {
//       const aTask = new TaskObject(description, this.tasks.length);
//       this.renderList();
//       document.getElementById('userInput').value = '';
//     }
//   }

//   addTask(aTask) {
//     this.tasks.push(aTask);
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   deleteTask(index) {
//     this.tasks.splice(index, 1);
//     this.renderList();
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   clearCompleted() {
//     this.tasks = this.tasks.filter(completedIsFalse);
//     this.renderList();
//     localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//   }

//   renderList() {
//     const ul = document.querySelector('ul');
//     ul.innerHTML = '';

//     const sortedArr = [...this.tasks];
//     sortedArr.sort((a, b) => a.index - b.index);

//     for (let i = 0; i < sortedArr.length; i += 1) {
//       this.tasks[i].index = i + 1;
//       const input = document.querySelector('#userInput');
//       const addedTasks = document.querySelector('ul');
//       const newTask = document.createElement('li');

//       newTask.innerHTML = `
//       <input type="checkbox" id="checkB" />
//       <p class="newTasks" id="addItem" />${this.tasks[i].description}</p>
//       <img id="dotsImg" src="./assets/three-dots.png" alt="" />
//       `;
//       addedTasks.appendChild(newTask);

//       input.addEventListener('click', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('onEdit');
//         });
//         newTask.classList.add('onEdit');
//       });

//       input.addEventListener('blur', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('onEdit');
//         });
//       });
//       input.value = `${sortedArr[i].description}`;
//       input.addEventListener('keyup', () => {
//         sortedArr[i].description = input.value;
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });

//       addedTasks.appendChild(newTask);
//       const checkBox = document.querySelector('#checkB');

//       checkBox.addEventListener('change', () => {
//         if (this.checked) {
//           this.tasks[i].completed = true;
//         } else {
//           this.tasks[i].completed = false;
//         }
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//     }
//   }
// }

export default DisplayTasks;

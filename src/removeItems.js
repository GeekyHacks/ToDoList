const completedIsFalse = (task) => task.completed === false;

export default completedIsFalse;




// import TaskObject from './userInput.js';
// import completedIsFalse from './removeItems.js';

// class TaskList {
//   // tasks property will be add using the methods following
//   constructor() {
//     this.tasks = JSON.parse(localStorage.getItem('ToDolist')) || [];
//   }
//   // in this method she added all events that can be done in the userinput
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
//   // main task of this method is to verify userInput is displayed(not empty) and also the taskes added are rendered
//   //and when empty it will inject data (atask) using the taskobject class then reset the input for another addition

//   addingEventListener() {
//     const description = document.getElementById('userInput').value;
//     if (description !== '') {
//       const aTask = new TaskObject(description, this.tasks.length); //inject data into the taskobject class
//       this.addTask(aTask);
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
//       addedTasks.innerHTML = '';
//       const listItem = document.createElement('li');
//       listItem.innerHTML = `
//       <input type="checkbox" id="checkB" />
//       <input class="listItems" type="text" readonly id=" />
//       <img id="dotsImg" src="./assets/three-dots.png" alt="" />
//       `;
//       //   const userInput = document.querySelector('#checkB');

//       // if (this.tasks[i].completed === true) {
//       //   checkBox=true;
//       // }

//       //   const optionImg = document.querySelector('#dotsImg');
//       //   optionImg.src = Drag;
//       //   moveBtn.appendChild(optionImg);

//       //   const deleteIcon = document.createElement('img');
//       //   deleteIcon.src = Bin;
//       //   deleteBtn.appendChild(deleteIcon);
//       //   deleteBtn.classList.add('hidden');

//       //   deleteBtn.addEventListener('click', () => {
//       //     this.deleteTask(i);
//       //   });

//       addedTasks.appendChild(listItem);

//       // const label = document.createElement('label');
//       //   const input = document.createElement('input');

//       //   const checkmark = document.createElement('span');
//       //   checkmark.classList.add('checkmark');
//       //   if (this.tasks[i].completed === true) {
//       //     checkmark.classList.add('checked');
//       //   }

//       //   const moveBtn = document.createElement('button');
//       //   const deleteBtn = document.createElement('button');

//       input.addEventListener('click', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('onEdit');
//         });
//         listItem.classList.add('onEdit');
//       });

//       input.addEventListener('blur', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('onEdit');
//         });
//         // setTimeout(() => {
//         //     dotsImg.classList.add('hidden');
//         //   moveBtn.classList.remove('hidden');
//         // }, 200);
//       });

//       //   li.appendChild(checkmark);
//       //   li.appendChild(input);

//       input.value = `${sortedArr[i].description}`;
//       input.addEventListener('keyup', () => {
//         sortedArr[i].description = input.value;
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//       //   li.appendChild(deleteBtn);
//       //   li.appendChild(moveBtn);
//       addedTasks.appendChild(listItem);
//       const checkBox = document.querySelector('#checkB');

//       checkBox.addEventListener('change', () => {
//         // checkBox.classList.toggle('checked');
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

// export default TaskList;




















// import TaskObject from './TaskObject.js';
// import completedIsFalse from './CompletedFilter.js';
// import Drag from './drag-handle-minor-svgrepo-com.svg';
// import Bin from './bin-svgrepo-com.svg';

// class TaskList {
// // tasks property will be add using the methods following
//   constructor() {
//     this.tasks = JSON.parse(localStorage.getItem('ToDolist')) || [];
//   }
// // in this method she added all events that can be done in the userinput 
//   init() {
    
//     const addButton = document.getElementById('add-btn');
//     addButton.addEventListener('click', (event) => {
//       event.preventDefault();
//       this.addingEventListener();
//     });

//     document.getElementById('userInput').addEventListener('keypress', (event) => {
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         this.addingEventListener();
//       }
//     });

//     const clearBtn = document.getElementById('clear');
//     clearBtn.addEventListener('click', () => {
//       this.clearCompleted();
//     });

//     window.addEventListener('load', () => {
//       this.renderList();
//     });
//   }
// // main task of this method is to verify userInput is displayed(not empty) and also the taskes added are rendered
// //and when empty it will inject data (atask) using the taskobject class then reset the input for another addition

//   addingEventListener() {
//     const description = document.getElementById('userInput').value;
//     if (description !== '') {
//       const aTask = new TaskObject(description, this.tasks.length);//inject data into the taskobject class
//       this.addTask(aTask);
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
//       const addedTasks = document.createElement('ul');
//       addedTasks.innerHTML='';
//       const listItem = document.createElement('li');
//       listItem.innerHTML=`
//       <input type="checkbox" id="checkB" />
//       <input class="listItems" type="text" readonly />
//       <img id="dotsImg" src="./assets/three-dots.png" alt="" />
//       `
//       addedTasks.appendChild(listItem);
      
//       // const label = document.createElement('label');
//       const input = document.createElement('input');

//       const checkmark = document.createElement('span');
//       checkmark.classList.add('checkmark');
//       if (this.tasks[i].completed === true) {
//         checkmark.classList.add('checked');
//       }

//       const moveBtn = document.createElement('button');
//       const deleteBtn = document.createElement('button');

//       const moveIcon = document.createElement('img');
//       moveIcon.src = Drag;
//       moveBtn.appendChild(moveIcon);

//       const deleteIcon = document.createElement('img');
//       deleteIcon.src = Bin;
//       deleteBtn.appendChild(deleteIcon);
//       deleteBtn.classList.add('hidden');

//       deleteBtn.addEventListener('click', () => {
//         this.deleteTask(i);
//       });

//       input.addEventListener('click', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('on-edit');
//         });
//         li.classList.add('on-edit');
//         checkmark.classList.add('darken');
//         moveBtn.classList.add('hidden');
//         deleteBtn.classList.remove('hidden');
//       });

//       input.addEventListener('blur', () => {
//         document.querySelectorAll('li').forEach((element) => {
//           element.classList.remove('on-edit');
//         });
//         setTimeout(() => {
//           deleteBtn.classList.add('hidden');
//           moveBtn.classList.remove('hidden');
//         }, 500);
//       });

//       li.appendChild(checkmark);
//       li.appendChild(input);
//       input.value = `${sortedArr[i].description}`;
//       input.addEventListener('keyup', () => {
//         sortedArr[i].description = input.value;
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//       li.appendChild(deleteBtn);
//       li.appendChild(moveBtn);
//       ul.appendChild(li);

//       checkmark.addEventListener('click', () => {
//         checkmark.classList.toggle('checked');
//         if (checkmark.classList.contains('checked')) {
//           this.tasks[i].completed = true;
//         } else {
//           this.tasks[i].completed = false;
//         }
//         localStorage.setItem('ToDolist', JSON.stringify(this.tasks));
//       });
//     }
//   }
// }

// export default TaskList;

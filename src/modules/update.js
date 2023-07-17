import renderList from './displayList.js';
import { taskarr, addTask } from './addTask.js';
import removeItems from './removeItems.js';
// export default (task) => {
//   for (let i = 0; i < taskarr.length; i++) {
//     task = taskarr[i];
//     taskarr[i].description = userInput.value;
//   }

//   return taskarr;
// };

// export default (taskarr, index, newDescription) => {
//   taskarr[index].description = newDescription;
//   console.log(taskarr);
//   return taskarr;

// };

// const taskDescription = document.querySelectorAll('#addItem');
// taskDescription.forEach((task, index) => {
//   task.addEventListener('change', () => {


//     // localStorage.setItem('taskarr', JSON.stringify(newdescription))
//     // localStorage.setItem('taskarr', JSON.stringify(taskarr));

//     // taskDescription.value = taskarr[index].description;
//     const editTask = taskarr[index].description;
//     console.log(editTask);
//     const taskValue = taskDescription.value;

//     console.log(taskValue);
//   });

//   // return taskarr;
// });

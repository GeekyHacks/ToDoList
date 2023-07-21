import { taskarr } from './addTask.js';
import {saveData} from './userInput.js';


export default class TaskStatus {
    static updateStatus = () => {
      const checkB = document.querySelectorAll('.checkB');

      checkB.forEach((checkbox, i) => {
        checkbox.addEventListener('change', () => {
        
          if (!taskarr[i].completed) {
          
            taskarr[i].completed = true;
            saveData(taskarr);
            checkbox.nextElementSibling.classList.add('completed');
          } else {
            taskarr[i].completed = false;
            saveData(taskarr);
            checkbox.nextElementSibling.classList.remove('completed');
          }
        });
      });
    };

    // clearAllBtn.addEventListener('click', () => {
    //   window.localStorage.clear();
    //   reloading();
    // });
    



    static clearCompleted = () => {
      const clearAllBtn = document.querySelector('#clearAllBtn');
      clearAllBtn.addEventListener('click', () => {
        const notCompleted = taskarr.filter((task) => task.completed !== true);
        notCompleted.forEach((e, i) => {
          e.index = i + 1;
        });
        saveData(notCompleted);
        window.location.reload();
      });
    }
}










// export const completedUpdate = (test, index) => {
//   test = taskarr;
//   let notSelected = test.filter((item) => {
//     if (!item.completed) {
//       item.completed = true;

//       return taskarr;
//     }
//     return (item.completed = false);
//   });

//   if (notSelected) {
//     // taskarr.splice(index, 1);
 
//     return taskarr;
//   }
//   let i = index;

//   while (i < taskarr.length) {
//     taskarr[i].index = i;
//     i += 1;
//   }

//   // localStorage.setItem('taskarr', JSON.stringify(taskarr));

//   console.log(taskarr);
//   return taskarr;
// };

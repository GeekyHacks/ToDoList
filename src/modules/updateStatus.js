import { taskarr } from './addTask.js';
import { saveData } from './userInput.js';

// const checkboxValues = localStorage.getItem('checkboxValues') || {};

export class TaskStatus {
  static updateStatus = () => {
    const checkB = document.querySelectorAll('.checkB');

    checkB.forEach((checkbox, i) => {
      checkbox.addEventListener('change', () => {
        if (!taskarr[i].completed) {
          taskarr[i].completed = true;

          // checkboxValues[checkbox.key] = checkbox.checked;
          // localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
          saveData(taskarr);
          // recallChecked();
        } else {
          taskarr[i].completed = false;
          checkbox['checked'] = false;
          saveData(taskarr);
          // checkbox.nextElementSibling.classList.remove('completed');
        }
      });
    });
  };

  // static recallChecked = () => {
  //   [...checkboxValues.children].forEach((child) => {
  //     console.log(child);
  //     const checkbox = document.getElementById(key);
  //     checkbox['checked'] = value;
  //   });

  //   Object.entries(checkboxValues).forEach(([key, value]) => {
  //     const checkbox = document.getElementById(key);
  //     checkbox['checked'] = value;
  //     console.log(key + ' - ' + value);
  //   });
  // };

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
  };
}

// export const recallChecked = () => {
//   Object.entries(checkboxValues).forEach((key, value) => {
//     const checkbox = document.getElementById(key);
//     checkbox['checked'] = value;
//   });
// };
// const checkboxValues = localStorage.getItem("checkboxValues") || {};
// const checkboxes = document.querySelectorAll(".checkbox");

// checkboxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", () => {
//     checkboxValues[checkbox.id] = checkbox.checked;
//     localStorage.setItem("checkboxValues", JSON.stringify(checkboxValues));
//   });
// });

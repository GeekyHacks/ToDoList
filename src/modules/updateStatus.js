import { taskarr } from './addTask.js';
import { saveData } from './userInput.js';

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

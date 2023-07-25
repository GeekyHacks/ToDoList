import { taskarr } from './addTask.js';
import { saveData } from './userInput.js';

export class TaskStatus {
  static updateStatus = () => {
    const checkB = document.querySelectorAll('.checkB');

    checkB.forEach((checkbox, i) => {
      checkbox.addEventListener('change', () => {
        if (!taskarr[i].completed) {
          taskarr[i].completed = true;
          checkbox.setAttribute('checked', 'checked');
          document.location.reload();

          saveData(taskarr);
        } else {
          taskarr[i].completed = false;
          document.location.reload();

          saveData(taskarr);
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

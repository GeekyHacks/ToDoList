<<<<<<< Updated upstream:src/userInput.js
const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];
=======
const taskarr = [{ description: 'First task', completed: false, index: 1 }];

// const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];
>>>>>>> Stashed changes:src/modules/userInput.js
class TaskObject {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }

  static addObject(description, index) {
    const newTask = new TaskObject(description, index + 1);
    taskarr.unshift(newTask);
    localStorage.setItem('taskarr', JSON.stringify(taskarr));
  }

  static removeObject(description, index) {
    const newTask = new TaskObject(description, index - 1);
    taskarr.splice(newTask);
    localStorage.setItem('taskarr', JSON.stringify(taskarr));
  }
}

export { TaskObject, taskarr };

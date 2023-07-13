const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];
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

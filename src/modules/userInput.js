export class TaskObject {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

export const saveData = (data) => {
  localStorage.setItem('taskarr', JSON.stringify(data));
};

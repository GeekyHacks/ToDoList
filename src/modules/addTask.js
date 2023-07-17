import TaskObject from './userInput.js';
// import { renderList } from './displayList.js';


export const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];

export const addTask = (description, index) => {
  const newTask = new TaskObject(description, index + 1);
  taskarr.push(newTask);
  localStorage.setItem('taskarr', JSON.stringify(taskarr));
};

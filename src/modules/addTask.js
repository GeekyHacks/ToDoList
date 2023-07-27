import { TaskObject, saveData } from './userInput.js';

export const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];

export const addTask = (description, index) => {
  index = taskarr.length;
  const newTask = new TaskObject(description, index + 1);
  taskarr.push(newTask);
  taskarr.sort((a, b) => a.index - b.index);
  saveData(taskarr);
  return taskarr;
};

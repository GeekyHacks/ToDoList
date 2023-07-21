import { TaskObject, saveData } from './userInput.js';

export const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];

export const addTask = (description, index) => {
  index = taskarr.length;
  const newTask = new TaskObject(description, index);
  taskarr.push(newTask);
  // // this will sort out the  user input index
  const sortedArr = [...taskarr];
  sortedArr.sort((a, b) => a.index - b.index);

  saveData(taskarr);
  return taskarr;
};

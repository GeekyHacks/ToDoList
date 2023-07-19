import TaskObject from './userInput.js';
// import { renderList } from './displayList.js';

export const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];

export const addTask = (description, index) => {
  index = taskarr.length;
  const newTask = new TaskObject(description, index);
  taskarr.push(newTask);
  // this will sort out the  user input index 
  const sortedArr = [...taskarr];
  sortedArr.sort((a, b) => a.index - b.index);

  localStorage.setItem('taskarr', JSON.stringify(sortedArr));
  console.log(taskarr);
  return taskarr;
};

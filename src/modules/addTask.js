import { TaskObject } from './userInput.js';
import { renderList, tasksList } from './displayList.js';

export const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];
// const input = document.getElementById('userIput');
//   description="";

export const addTask = (description, index) => {
 
  const newTask = new TaskObject(description, index + 1);
  taskarr.push(newTask);
  renderList();
  localStorage.setItem('taskarr', JSON.stringify(taskarr));
  
};
// console.log(addTask)
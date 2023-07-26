import { TaskObject, saveData } from './userInput.js';

export const taskarr = JSON.parse(localStorage.getItem('taskarr')) || [];

export const addTask = (description, index) => {
  index = taskarr.length;
  const newTask = new TaskObject(description, index + 1);
  taskarr.push(newTask);
  // this will sort out the  user input index

  // const sortedArr = [...taskarr];
  // sortedArr.sort((a, b) => a.index - b.index);

  // taskarr.sort((a, b) => a.index - b.index);
  saveData(taskarr);
  return taskarr;
};

var checkboxValues = JSON.parse(localStorage.getItem('checkboxValues')) || {};
var $checkboxes = $('#checkbox-container :checkbox');

$checkboxes.on('change', function () {
  $checkboxes.each(function () {
    checkboxValues[this.id] = this.checked;
  });
  localStorage.setItem('checkboxValues', JSON.stringify(checkboxValues));
});

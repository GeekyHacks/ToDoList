import { taskarr } from './addTask.js';
console.log(taskarr);

export const completedUpdate = ( test, index) => {
   test = taskarr;
  let notSelected = test.filter((item) => {
    if (!item.completed) {
      item.completed = true;

      return taskarr;
    }
return  item.completed = false;
  });

  if (notSelected) {
    localStorage.setItem('taskarr', JSON.stringify(test));
    }


  let i = index;
  while (i < taskarr.length) {
    // localStorage.setItem('taskarr', JSON.stringify(test));
    taskarr[i].index = i;
    i += 1;
  }

 
  console.log(taskarr);
  return taskarr;
};

// export const update = () => {
//   let test = taskarr;
//   let filtered = test.filter((item) => item.completed === false);
//   console.log(filtered);
//   let y = filtered.map((item) => (item.completed = true));
//   console.log(y);
//   localStorage.setItem('taskarr', JSON.stringify(taskarr));
//   return taskarr;
// };

// const task = taskarr[task];
// const completedIsFalse = (task) => task.completed === true;
// console.log(task);
// export default completedIsFalse;

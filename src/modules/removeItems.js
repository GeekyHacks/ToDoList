import { taskarr } from './addTask';

// const removeTask = () => {
//  const  index = taskarr.length;
//   let i = index;

//   while (i < taskarr.length) {
//     taskarr[i].index = i;
//     i += 1;
//     taskarr.splice(index, 1);

//     // taskarr[i].index = i;
//   }

//   localStorage.setItem('taskarr', JSON.stringify(taskarr));

//   return taskarr;
// };

const removeTask = (taskarr, index) => {
  let i = index;

  while (i <= taskarr.length) {
    taskarr[i].index = i;

    i += 1;
    taskarr.splice(index, 1);
    localStorage.setItem('taskarr', JSON.stringify(taskarr));
    console.log(taskarr);
    // taskarr[i].index = i;
  }

  // return taskarr;
};

export { removeTask };

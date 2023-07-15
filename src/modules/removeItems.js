export default (taskarr, index) => {
  let i = index;

  while (i < taskarr.length) {
    taskarr[i].index = i;

    i += 1;
    taskarr.splice(index, 1);
  }
  localStorage.setItem('taskarr', JSON.stringify(taskarr));

  return taskarr;
};

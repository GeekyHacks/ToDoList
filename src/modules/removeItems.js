export default (taskarr, index) => {
  taskarr.splice(index, 1);
  let i = index;
  while (i < taskarr.length) {
    taskarr[i].index = i;
    i += 1;
  }

  return taskarr;
};

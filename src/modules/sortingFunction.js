const sortArray = (array) => {
  // this will sort out the index when removing Items
  const sortedArr = [...array];
  index = array.length;
  sortedArr.sort((a, b) => a.index - b.index);
};
export default { sortArray };

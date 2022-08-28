function flatten(item){
  let retArr = [];
  item.forEach((arrItem) => {
    if (Array.isArray(arrItem)) {
      retArr = retArr.concat(flatten(arrItem));
    } else {
      retArr.push(arrItem);
    }
  });

  return retArr;
}

// Tests
const testCases = [
  { func: flatten, args: [[1, 2, 3, [4, 5] ]], output: [1, 2, 3, 4, 5] },
  { func: flatten, args: [[1, [2, [3, 4], [[5]]]]], output: [1, 2, 3, 4, 5] },
  { func: flatten, args: [[[1],[2],[3]]], output: [1,2,3] },
  { func: flatten, args: [[[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]], output: [1,2,3] },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.log('---------------EXPECTED---------------');
  console.log(test.func(...test.args));
  console.log(test.output);
  console.log('^^^^^^^^^^^^^^^RECEIVED^^^^^^^^^^^^^^^');
}

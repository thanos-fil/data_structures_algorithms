function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((right + left) / 2);
  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((right + left) / 2);
  }

  return arr[middle] === val ? middle : -1;
}

// Tests
const testCases = [
  { func: binarySearch, args: [[1,2,3,4,5], 2], output: 1 },
  { func: binarySearch, args: [[1,2,3,4,5], 3], output: 2 },
  { func: binarySearch, args: [[1,2,3,4,5], 5], output: 4 },
  { func: binarySearch, args: [[1,2,3,4,5], 6], output: -1 },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}


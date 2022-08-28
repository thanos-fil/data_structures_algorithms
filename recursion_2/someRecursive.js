function someRecursive(arr, cb){
  if (arr.length < 1) {
    return false;
  }
  return someRecursive(arr.slice(1), cb) || !!cb(arr[0])
}

const isOdd = val => val % 2 !== 0;

// Tests
const testCases = [
  { func: someRecursive, args: [[1,2,3,4], isOdd], output: true },
  { func: someRecursive, args: [[4,6,8,9], isOdd], output: true },
  { func: someRecursive, args: [[4,6,8], isOdd], output: false },
  { func: someRecursive, args: [[4,6,8], val => val > 10], output: false },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

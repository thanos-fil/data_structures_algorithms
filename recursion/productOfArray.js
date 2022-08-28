// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
}


// Tests
const testCases = [
  { func: productOfArray, args: [[1, 2, 3]], output: 6 },
  { func: productOfArray, args: [[1, 2, 3, 10]], output: 60 },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

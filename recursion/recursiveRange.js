// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num){
  if (num === 1) {
    return 1;
  }

  return num + recursiveRange(num - 1);
}

// Tests
const testCases = [
  { func: recursiveRange, args: [6], output: 21 },
  { func: recursiveRange, args: [10], output: 55 },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

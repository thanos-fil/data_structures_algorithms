//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num){
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

// Tests
const testCases = [
  { func: factorial, args: [1], output: 1 },
  { func: factorial, args: [2], output: 2 },
  { func: factorial, args: [4], output: 24 },
  { func: factorial, args: [7], output: 5040 },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

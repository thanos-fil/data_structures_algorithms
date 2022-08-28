// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
  // add whatever parameters you deem necessary - good luck!
  if (num === 1 || num === 2) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

// Tests
const testCases = [
  { func: fib, args: [4], output: 3 },
  { func: fib, args: [10], output: 55 },
  { func: fib, args: [28], output: 317811 },
  { func: fib, args: [35], output: 9227465 },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

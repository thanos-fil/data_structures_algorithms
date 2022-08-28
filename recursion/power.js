function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1)
}

// Tests
const testCases = [
  { func: power, args: [2, 0], output: 1 },
  { func: power, args: [2, 2], output: 4 },
  { func: power, args: [2, 4], output: 16 },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

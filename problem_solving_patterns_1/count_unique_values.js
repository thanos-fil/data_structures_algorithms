function count_unique_values(arr) {
  if (arr.length < 2) {
    return arr.length;
  }
  let index = 0;
  let scout = 1;
  while (scout < arr.length) {
    if (arr[index] === arr[scout]) {
      scout += 1;
    } else {
      index += 1;
      arr[index] = arr[scout];
    }
  }

  return index + 1;
}

// Tests
const testCases = [
  { args: [ 1, 1, 1, 1, 1, 2], output: 2 },
  { args: [ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ], output: 7 },
  { args: [ ], output: 0 },
  { args: [ -2, -1, -1, 0, 1 ], output: 4 },
];

for (let test of testCases) {
  console.log('Test', test);
  console.assert(count_unique_values(test.args) === test.output);
}

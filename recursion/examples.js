function countDown(num) {
  if (num <= 0) {
    console.log('Done');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

function naive_factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total += i;
  }
  return total;
}

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

function collectOdds(arr) {
  let result = [];
  (function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1));
  })(arr)

  return result;
}

function collectOddValues(arr) {
  let odds = [];
  if (arr.length === 0) {
    return odds;
  }

  if (arr[0] % 2 !== 0) {
    odds.push(arr[0])
  }

  return odds.concat(collectOddValues(arr.slice(1)));
}

// Tests
const testCases = [
  { func: sumRange, args: [4], output: 10 },
  { func: factorial, args: [4], output: 24 },
  { func: collectOdds, args: [[1, 2, 3, 4, 5, 6, 7, 8, 9]], output: [1, 3, 5, 7, 9] },
  { func: collectOddValues, args: [[1, 2, 3, 4, 5, 6, 7, 8, 9]], output: [1, 3, 5, 7, 9] },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

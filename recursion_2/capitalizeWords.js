function capitalizeWords (wordsArr) {
  let capArr = [];
  const helperFn = (arr) => {
    if (arr.length < 1) {
      return;
    }
    capArr.push(arr[0].toUpperCase());
    helperFn(arr.slice(1));
  };

  helperFn(wordsArr);
  return capArr;
}

// Tests
const testCases = [
  { func: capitalizeWords, args: [['i', 'am', 'learning', 'recursion']], output: ['I', 'AM', 'LEARNING', 'RECURSION'] },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.log('---------------EXPECTED---------------');
  console.log(test.func(...test.args));
  console.log(test.output);
  console.log('^^^^^^^^^^^^^^^RECEIVED^^^^^^^^^^^^^^^');
}

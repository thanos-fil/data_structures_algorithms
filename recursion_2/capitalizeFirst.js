function capitalizeFirst (strArr) {
  let finalArr = [];
  const helperFn = (arr) => {
    if (arr.length < 1) {
      return;
    }

    finalArr.push(arr[0].charAt(0).toUpperCase() + arr[0].substring(1));
    return helperFn(arr.slice(1));
  };

  helperFn(strArr);
  return finalArr;
}

// Tests
const testCases = [
  { func: capitalizeFirst, args: [['car','taco','banana']], output: ['Car','Taco','Banana'] },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.log('---------------EXPECTED---------------');
  console.log(test.func(...test.args));
  console.log(test.output);
  console.log('^^^^^^^^^^^^^^^RECEIVED^^^^^^^^^^^^^^^');
}

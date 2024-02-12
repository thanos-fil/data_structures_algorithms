function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }

  return true;
}

// Tests
const testCases = [
  { args: ['', '' ], output: true },
  { args: [ 'aaz', 'azz' ], output: false },
  { args: [ 'anagram', 'nagaram' ], output: true },
  { args: [ 'rat', 'car' ], output: false },
  { args: [ 'awesome', 'awesom' ], output: false },
  { args: [ 'amanaplanacanalpanama', 'acanalmanplanpamana' ], output: false },
  { args: [ 'qwerty', 'qeywrt' ], output: true },
  { args: [ 'texttwisttime', 'timetwisttext' ], output: true },
];

for (let test of testCases) {
  console.log('Test', test);
  console.assert(validAnagram(...test.args) === test.output);
}

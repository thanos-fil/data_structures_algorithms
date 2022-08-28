function reverse(phrase){
  if (phrase === '') {
    return '';
  }

  return reverse(phrase.substring(1)) + phrase.charAt(0);
}

// Tests
const testCases = [
  { func: reverse, args: ['awesome'], output: 'emosewa' },
  { func: reverse, args: ['rithmschool'], output: 'loohcsmhtir' },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

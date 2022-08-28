function isPalindrome(phrase){
  if (phrase.length < 2) {
    return true;
  }

  return isPalindrome(phrase.substring(1, phrase.length - 1)) && phrase.charAt(0) === phrase.charAt(phrase.length - 1);
}

// Tests
const testCases = [
  { func: isPalindrome, args: ['awesome'], output: false },
  { func: isPalindrome, args: ['foobar'], output: false },
  { func: isPalindrome, args: ['tacocat'], output: true },
  { func: isPalindrome, args: ['amanaplanacanalpanama'], output: true },
  { func: isPalindrome, args: ['amanaplanacanalpandemonium'], output: false },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.assert(test.func(...test.args) === test.output);
}

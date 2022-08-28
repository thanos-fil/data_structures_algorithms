// RADIX SORT ONLY WORKS WITH NUMBERS - It avoids comparisons

// Complexities: (Controversial, depends on how numbers are stored in memory, check Wikipedia in radix sort - par Efficiency)
// Time Complexity (Best): O(n * k)
// Time Complexity (Average): O(n * k) or O(n * log(n))
// Time Complexity (Worst): O(n * n) or O(n * log(n))
// Space Complexity: O(n + k)
// Larger space complexity, much faster though.

function getDigit(num, place, base = 10) {
  return Math.floor(Math.abs(num) / Math.pow(base, place)) % base;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

// PSEUDOCODE FOR RADIX SORT
// * Figure out how many digits the largest number has
// * Loop from k = 0 up to the largest number of digits
// * For each iteration of the loop:
// ** Create buckets for each digit (0 to 9)
// ** Place each number to the corresponding bucket based to its nth digit
// * Replace existing array with values in our buckets starting with 0 and going up to 9
// * Return list at the end
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for(let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for(let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

const testCases = [
  { func: getDigit, args: [12345, 0], output: 5 },
  { func: getDigit, args: [12345, 1], output: 4 },
  { func: getDigit, args: [12345, 2], output: 3 },
  { func: getDigit, args: [12345, 3], output: 2 },
  { func: getDigit, args: [12345, 4], output: 1 },
  { func: digitCount, args: [12], output: 2 },
  { func: digitCount, args: [123], output: 3 },
  { func: digitCount, args: [1234], output: 4 },
  { func: mostDigits, args: [[1234, 56, 7]], output: 4 },
  { func: mostDigits, args: [[1, 1, 11111, 1]], output: 5 },
  { func: mostDigits, args: [[12, 56, 78, 34]], output: 2 },
  { func: radixSort, args: [[23, 345, 5467, 12, 2345, 9852]], output: [12, 23, 345, 2345, 5467, 9852] },
];

for (let test of testCases) {
  console.log('---------------EXPECTED---------------');
  console.log(test.func.name);
  console.log(test.output);
  console.log(test.func(...test.args));
  console.log('^^^^^^^^^^^^^^^RECEIVED^^^^^^^^^^^^^^^');
}


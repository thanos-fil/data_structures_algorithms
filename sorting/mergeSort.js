// Complexities:
// Time Complexity (Best): O(n * log(n))
// Time Complexity (Average): O(n * log(n))
// Time Complexity (Worst): O(n * log(n))
// Space Complexity (Worst): O(n)
// Larger space complexity, much faster though.


// PSEUDOCODE FOR MERGE (time complexity O(n))
// * Create an empty results array, check the smallest values in each input array;
// * WHILE there are still values not checked DO:
// ** If the value in the first array is smaller than the value in second array,
//    push the value in the first array into the results array and move on to the next value in the first array;
// ** If the value in the first array is larger than the value in second array,
//    push the value in the second array into the results array and move on to the next value in the second array;
// ** Once we exhaust all values in one array, push the remaining values of the other array into the results array.

function merge(sortedArr1, sortedArr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while(i < sortedArr1.length && j < sortedArr2.length) {
    if (sortedArr1[i] < sortedArr2[j]) {
      results.push(sortedArr1[i]);
      i++;
    } else {
      results.push(sortedArr2[j]);
      j++;
    }
  }

  while(i < sortedArr1.length) {
    results.push(sortedArr1[i]);
    i++;
  }
  while(j < sortedArr2.length) {
    results.push(sortedArr2[j]);
    j++;
  }
  return results;
}

// PSEUDOCODE FOR MERGESORT (Time complexity O(log(n)))
// * Break up the array into halves until you have arrays that are empty or have one element;
// * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array;
// * Once the array has been merged back together, return the merged (and sorted!) array;

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

const testCases = [
  { func: merge, args: [[1, 10, 50], [2, 14, 99, 100]], output: [1, 2, 10, 14, 50, 99, 100] },
  { func: mergeSort, args: [[10, 24, 76, 73, 72, 1, 9]], output: [1, 9, 10, 24, 72, 73, 76] },
];

for (let test of testCases) {
  console.log('---------------EXPECTED---------------');
  console.log(test.output);
  console.log(test.func(...test.args));
  console.log('^^^^^^^^^^^^^^^RECEIVED^^^^^^^^^^^^^^^');
}

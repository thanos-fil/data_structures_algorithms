// Complexities:
// Time Complexity (Best): O(n)
// Time Complexity (Average): O(n*n)
// Time Complexity (Worst): O(n*n)
// Space Complexity (Worst): O(1)
// Works well if new data keeps coming into sorted array.

function insertionSort(arr) {
  const swap = (arr, idx1, idx2) => ([ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]);
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal;
    console.log('arr');
  }

  return arr;
}

const testCases = [
  { func: insertionSort, args: [[2, 1, 9, 76, 4]], output: [1, 2, 4, 9, 76] },
];

for (let test of testCases) {
  console.log('---------------EXPECTED---------------');
  console.log(test.output);
  console.log(test.func(...test.args));
  console.log('^^^^^^^^^^^^^^^RECEIVED^^^^^^^^^^^^^^^');
}

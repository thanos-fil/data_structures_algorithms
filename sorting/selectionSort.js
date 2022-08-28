// Complexities:
// Time Complexity (Best): O(n*n)
// Time Complexity (Average): O(n*n)
// Time Complexity (Worst): O(n*n)
// Space Complexity (Worst): O(1)

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => ([ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]);

  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) swap(arr, i, minIdx);
  }

  return arr;
}

const testCases = [
  { func: selectionSort, args: [[5, 2, 8, 23, 14, 102, 56]], output: [2, 5, 8, 14, 23, 56, 102] },
];

for (let test of testCases) {
  console.log('Test', test);
  console.log('Output', test.func(...test.args));
  console.log('---------------EXPECTED---------------');
  console.log(test.output);
  console.log(test.func(...test.args));
  console.log('^^^^^^^^^^^^^^^RECEIVED^^^^^^^^^^^^^^^');
}

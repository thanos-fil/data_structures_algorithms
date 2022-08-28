// Complexities:
// Time Complexity (Best): O(n * log(n))
// Time Complexity (Average): O(n * log(n))
// Time Complexity (Worst - array is already sorted and we pick first item to start with): O(n * n)
// Space Complexity (Worst): O(n)
// Larger space complexity, much faster though.

// PSEUDOCODE FOR PIVOT
// * Grab first element (for simplicity)
// * Store current element's index in a variable(this will keep track of where the pivot should end up)
// * Loop through the array from the start until the end:
// ** If pivot is greater than current element, increment pivot index variable and then swap current element
//    with the element at pivot index
// ** Swap the starting element (i.e. the pivot) with the pivot index
// * Return pivot index
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => ([ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ]);

  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
}

// PSEUDOCODE FOR QUICKSORT
// * Call the pivot helper on the array
// * When he helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left
//   of that index, and the subarray to the right of that index
// * Recursion will stop when subarray has less than 2 elements
function quickSort(arr, left = 0, right  = arr.length  - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr;
}

const testCases = [
  { func: pivot, args: [[4, 8, 2, 1, 5, 7, 6, 3]], output: 3 },
  { func: quickSort, args: [[4, 8, 2, 1, 5, 7, 6, 3]], output: [1, 2, 3, 4, 5, 6, 7, 8] },
];

for (let test of testCases) {
  console.log('---------------EXPECTED---------------');
  console.log(test.output);
  console.log(test.func(...test.args));
  console.log('^^^^^^^^^^^^^^^RECEIVED^^^^^^^^^^^^^^^');
}

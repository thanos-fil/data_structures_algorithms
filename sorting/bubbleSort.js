// Complexities:
// Time Complexity (Best): O(n)
// Time Complexity (Average): O(n*n)
// Time Complexity (Worst): O(n*n)
// Space Complexity (Worst): O(1)
// Works well if data almost sorted ( O(n) )

function bubbleSortSimple(arr) {
  for (var i = arr.length; i > 0; i --) {
    for (var j = 0; j < i - 1; j++) {
      // SWAP
      if (arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr;
}

function bubbleSortNaive(arr) {
  const swap = (arr, idx1, idx2) => {
    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
  };

  for (let i = arr.length; i > 0; i --) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) swap(arr, j, j + 1);
    }
  }

  return  arr;
}

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
  };

  let noSwaps = false;

  for (let i = arr.length; i > 0; i --) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return  arr;
}

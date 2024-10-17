function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    // Assume the minimum is the first unsorted element
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // Find the minimum element in the unsorted part of the array
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found minimum element with the first unsorted element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

let arr = [5, 1, 6, 7, 9, 22];
console.log(selectionSort(arr));

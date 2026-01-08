import { swap } from "../Swap.js";

/**
 * SELECTION SORT ALGORITHM
 *
 * DESCRIPTION:
 * Selection Sort divides the array into two parts: sorted and unsorted.
 * It repeatedly finds the smallest element in the unsorted portion and
 * moves it to the end of the sorted portion. Simple and intuitive.
 *
 * HOW IT WORKS:
 * 1. Start with the first element (sorted portion)
 * 2. Find the smallest element in the unsorted portion
 * 3. Swap it with the first element of the unsorted portion
 * 4. Move the boundary between sorted and unsorted portions one step right
 * 5. Repeat until the entire array is sorted
 *
 * TIME COMPLEXITY: O(n²) - always, regardless of input
 * SPACE COMPLEXITY: O(1) - constant space (in-place sorting)
 *
 * BEST CASE: O(n²) - still needs to scan remaining elements
 * WORST CASE: O(n²)
 * STABLE: No (basic version) - can swap non-adjacent elements
 *
 * CHARACTERISTICS: Minimizes number of swaps (at most n-1 swaps)
 * SUITABLE FOR: Small datasets, when memory write operations are limited
 */

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }
    swap(arr, smallestIndex, i);
  }
  return arr;
}

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 *
 * Input: [64, 25, 12, 22, 11]
 *
 * ITERATION 1 (i=0):
 * Unsorted: [64, 25, 12, 22, 11]
 * Find smallest: 11 at index 4
 * Swap arr[0] (64) with arr[4] (11) → [11, 25, 12, 22, 64]
 * Sorted portion: [11]
 *
 * ITERATION 2 (i=1):
 * Unsorted: [25, 12, 22, 64]
 * Find smallest: 12 at index 2
 * Swap arr[1] (25) with arr[2] (12) → [11, 12, 25, 22, 64]
 * Sorted portion: [11, 12]
 *
 * ITERATION 3 (i=2):
 * Unsorted: [25, 22, 64]
 * Find smallest: 22 at index 3
 * Swap arr[2] (25) with arr[3] (22) → [11, 12, 22, 25, 64]
 * Sorted portion: [11, 12, 22]
 *
 * ITERATION 4 (i=3):
 * Unsorted: [25, 64]
 * Find smallest: 25 at index 3
 * Swap arr[3] (25) with arr[3] (25) → [11, 12, 22, 25, 64] (no change)
 * Sorted portion: [11, 12, 22, 25]
 *
 * FINAL OUTPUT: [11, 12, 22, 25, 64] ✓ SORTED
 * Total swaps made: 4
 */

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));
// Expected output: [11, 12, 22, 25, 34, 64, 90]

console.log(selectionSort([1, 6, 2, 9, 5]));

import { swap } from "../utils/Swap.js";

/**
 * BUBBLE SORT ALGORITHM
 * 
 * DESCRIPTION:
 * Bubble Sort is a simple sorting algorithm that repeatedly steps through the list,
 * compares adjacent elements, and swaps them if they are in the wrong order.
 * The algorithm gets its name because smaller elements "bubble" to the top (beginning)
 * of the array with each pass.
 * 
 * HOW IT WORKS:
 * 1. Compare each pair of adjacent elements
 * 2. Swap them if they are in the wrong order (first > second)
 * 3. Repeat this process for the entire array
 * 4. After each pass, the largest unsorted element reaches its correct position
 * 5. Use a flag to optimize: if no swaps occur in a pass, array is already sorted
 * 
 * TIME COMPLEXITY: O(n²) - quadratic time
 * SPACE COMPLEXITY: O(1) - constant space (in-place sorting)
 * 
 * BEST CASE: O(n) - when array is already sorted
 * WORST CASE: O(n²) - when array is reverse sorted
 */

function bubbleSort(arr) {
  let n = arr.length;
  let isSwap = false;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSwap = true;
        swap(arr, j, j + 1);
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

//time complexity: O(n^2)
//space complexity: O(1)

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 * 
 * Input: [64, 34, 25, 12, 22]
 * 
 * PASS 1:
 * [64, 34, 25, 12, 22] - Compare 64 & 34 → Swap → [34, 64, 25, 12, 22]
 * [34, 64, 25, 12, 22] - Compare 64 & 25 → Swap → [34, 25, 64, 12, 22]
 * [34, 25, 64, 12, 22] - Compare 64 & 12 → Swap → [34, 25, 12, 64, 22]
 * [34, 25, 12, 64, 22] - Compare 64 & 22 → Swap → [34, 25, 12, 22, 64] ✓
 *                         64 is now in correct position
 * 
 * PASS 2:
 * [34, 25, 12, 22, 64] - Compare 34 & 25 → Swap → [25, 34, 12, 22, 64]
 * [25, 34, 12, 22, 64] - Compare 34 & 12 → Swap → [25, 12, 34, 22, 64]
 * [25, 12, 34, 22, 64] - Compare 34 & 22 → Swap → [25, 12, 22, 34, 64] ✓
 *                         34 is now in correct position
 * 
 * PASS 3:
 * [25, 12, 22, 34, 64] - Compare 25 & 12 → Swap → [12, 25, 22, 34, 64]
 * [12, 25, 22, 34, 64] - Compare 25 & 22 → Swap → [12, 22, 25, 34, 64] ✓
 *                         25 is now in correct position
 * 
 * PASS 4:
 * [12, 22, 25, 34, 64] - Compare 12 & 22 → No Swap → [12, 22, 25, 34, 64] ✓
 *                         isSwap remains false, so break early
 * 
 * FINAL OUTPUT: [12, 22, 25, 34, 64] ✓ SORTED
 */

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// Expected output: [11, 12, 22, 25, 34, 64, 90]

console.log(bubbleSort([1, 2, 3, 4, 5]));
// Expected output: [1, 2, 3, 4, 5]

console.log(bubbleSort([5, 4, 3, 2, 1]));
// Expected output: [1, 2, 3, 4, 5]

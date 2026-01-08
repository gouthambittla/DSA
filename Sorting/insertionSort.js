/**
 * INSERTION SORT ALGORITHM
 * 
 * DESCRIPTION:
 * Insertion Sort builds the final sorted array one element at a time.
 * It iterates through an input array, and for each element, finds the correct
 * position in the sorted portion and inserts it there. Similar to sorting cards
 * in your hand - you pick one card and insert it in the right position.
 * 
 * HOW IT WORKS:
 * 1. Start from the second element (index 1)
 * 2. Store the current element as 'curr'
 * 3. Compare curr with elements before it (from right to left)
 * 4. Shift elements to the right if they are greater than curr
 * 5. Insert curr into the correct position
 * 6. Repeat until the entire array is sorted
 * 
 * TIME COMPLEXITY: O(n²) in average and worst case, O(n) in best case
 * SPACE COMPLEXITY: O(1) - constant space (in-place sorting)
 * 
 * BEST CASE: O(n) - when array is already sorted
 * WORST CASE: O(n²) - when array is reverse sorted
 * STABLE: Yes - maintains relative order of equal elements
 */

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i]; 
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 * 
 * Input: [5, 2, 8, 1, 9]
 * 
 * Initial state: [5, 2, 8, 1, 9]
 * Sorted portion: [5], Unsorted portion: [2, 8, 1, 9]
 * 
 * ITERATION 1 (i=1, curr=2):
 * Compare 2 with 5: 5 > 2 → shift 5 to right → [5, 5, 8, 1, 9]
 * Insert 2 at index 0 → [2, 5, 8, 1, 9]
 * Sorted portion: [2, 5]
 * 
 * ITERATION 2 (i=2, curr=8):
 * Compare 8 with 5: 5 < 8 → no shift needed
 * 8 stays at index 2 → [2, 5, 8, 1, 9]
 * Sorted portion: [2, 5, 8]
 * 
 * ITERATION 3 (i=3, curr=1):
 * Compare 1 with 8: 8 > 1 → shift 8 to right → [2, 5, 8, 8, 9]
 * Compare 1 with 5: 5 > 1 → shift 5 to right → [2, 5, 5, 8, 9]
 * Compare 1 with 2: 2 > 1 → shift 2 to right → [2, 2, 5, 8, 9]
 * Insert 1 at index 0 → [1, 2, 5, 8, 9]
 * Sorted portion: [1, 2, 5, 8]
 * 
 * ITERATION 4 (i=4, curr=9):
 * Compare 9 with 8: 8 < 9 → no shift needed
 * 9 stays at index 4 → [1, 2, 5, 8, 9]
 * Sorted portion: [1, 2, 5, 8, 9]
 * 
 * FINAL OUTPUT: [1, 2, 5, 8, 9] ✓ SORTED
 */

console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));
// Expected output: [11, 12, 22, 25, 34, 64, 90]

console.log(insertionSort([1, 6, 2, 9, 5]));
// Expected output: [1, 2, 5, 6, 9]
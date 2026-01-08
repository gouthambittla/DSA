/**
 * SWAP UTILITY FUNCTION
 *
 * DESCRIPTION:
 * A helper function that swaps two elements in an array by their indices.
 * This is used by multiple sorting algorithms (Bubble Sort, Selection Sort, etc.)
 * to exchange the positions of two elements.
 *
 * HOW IT WORKS:
 * 1. Store the element at index i in a temporary variable
 * 2. Copy element at index j to index i
 * 3. Copy the temporary value (original arr[i]) to index j
 *
 * TIME COMPLEXITY: O(1) - constant time
 * SPACE COMPLEXITY: O(1) - constant space (only one temp variable)
 *
 * EXAMPLE TRACE:
 * Original array: [5, 3, 8]
 * swap(arr, 0, 1)  // Swap elements at index 0 and 1
 *
 * Step 1: temp = arr[0] = 5
 * Step 2: arr[0] = arr[1] = 3 → array becomes [3, 3, 8]
 * Step 3: arr[1] = temp = 5 → array becomes [3, 5, 8]
 *
 * Result: [3, 5, 8] ✓ Elements at index 0 and 1 are swapped
 */

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export { swap };

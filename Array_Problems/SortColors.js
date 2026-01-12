// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

function sortColors(arr) {
  const n = arr.length;
  let low = 0;
  let mid = 0;
  let high = n - 1;
  while (mid <= high) {
    if (arr[mid] == 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    } else if (arr[mid] == 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      mid++;
      low++;
    } else {
      mid++;
    }
  }

  return arr;
}

// Example usage:
console.log(sortColors([2, 0, 2, 1, 1, 0]));
// Output: [0, 0, 1, 1, 2, 2]
// Time Complexity: O(n) where n is the number of elements in the array
// Space Complexity: O(1) as we are sorting in place

/*DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 * Input: [2, 0, 2, 1, 1, 0]
 * STEP 1: Initialize low = 0, mid = 0, high = 5
 * STEP 2: Iterate while mid <= high
 *  mid = 0: arr[0] = 2 → swap arr[0] and arr[5], high = 4
 *          Array: [0, 0, 2, 1, 1, 2]
 * mid = 0: arr[0] = 0 → swap arr[0] and arr[0], low = 1, mid = 1
 *         Array: [0, 0, 2, 1, 1, 2]
 * mid = 1: arr[1] = 0 → swap arr[1] and arr[1], low = 2, mid = 2
 *       Array: [0, 0, 2, 1, 1, 2]
 * mid = 2: arr[2] = 2 → swap arr[2] and arr[4], high = 3
 *        Array: [0, 0, 1, 1, 2, 2]
 * mid = 2: arr[2] = 1 → mid = 3
 *       Array: [0, 0, 1, 1, 2, 2]
 * mid = 3: arr[3] = 1 → mid = 4
 *      Array: [0, 0, 1, 1, 2, 2]
 * STEP 3: End of array reached
 *  Output: [0, 0, 1, 1, 2, 2]
 * /
 * /
 * / Result: [0, 0, 1, 1, 2, 2]
 * / Elements are sorted in place
 */


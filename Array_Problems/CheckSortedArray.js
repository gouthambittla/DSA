// Question: Write a function that checks if an array is sorted in non-decreasing order and decreasing order.

function isSortedArray(arr, order = "asc") {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    if (order === "asc" && arr[i - 1] > arr[i]) {
      return "Not a Sorted Array";
    } else if (order === "desc" && arr[i - 1] < arr[i]) {
      return "Not a Sorted Array";
    }
  }
  return `Sorted Array in ${order} order`;
}
console.log(isSortedArray([1, 2, 3, 4, 5])); // Output: Sorted Array in asc order
console.log(isSortedArray([5, 4, 3, 2, 1], "desc")); // Output: Sorted Array in desc order
console.log(isSortedArray([3, 1, 4, 2])); // Output: Not a Sorted Array

// time complexity: O(n) where n is the length of the array
// space complexity: O(1) as we are using only a constant amount of extra space

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 *
 *  Input: [1, 2, 3, 4, 5], order = "asc"
 *
 *  STEP 1: Initialize n = 5
 * STEP 2: Iterate through the array from index 1 to 4
 * i = 1: arr[0] = 1, arr[1] = 2 → 1 <= 2 (continue)
 * i = 2: arr[1] = 2, arr[2] = 3 → 2 <= 3 (continue)
 *  i = 3: arr[2] = 3, arr[3] = 4 → 3 <= 4 (continue)
 * i = 4: arr[3] = 4, arr[4] = 5 → 4 <= 5 (continue)
 * STEP 3: End of array reached without violations
 *
 * Output: Sorted Array in asc order
 */

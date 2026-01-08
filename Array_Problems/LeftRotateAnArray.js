// Left Rotate the Array by One
// Problem Statement: Given an integer array nums, rotate the array to the left by one.

// Example 1:
// Input:
//  nums = [1, 2, 3, 4, 5]
// Output:
//  [2, 3, 4, 5, 1]
// Explanation:
//  Initially, nums = [1, 2, 3, 4, 5]
// Rotating once to the left results in nums = [2, 3, 4, 5, 1].

// Example 2:
// Input:
//  nums = [-1, 0, 3, 6]
// Output:
//  [0, 3, 6, -1]
// Explanation:
//  Initially, nums = [-1, 0, 3, 6]
// Rotating once to the left results in nums = [0, 3, 6, -1].

function leftRotateByOne(arr) {
  let n = arr.length;
  let i = arr[0];
  for (let j = 0; j < n - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[n - 1] = i;
  return arr;
}
console.log(leftRotateByOne([1, 2, 3, 4, 5]));
Output: [2, 3, 4, 5, 1];

function leftRotateByKBetter(arr, k) {
  let n = arr.length;
  k = k % n;
  let temp = arr.slice(0, k);
  for (let j = k; j < n; j++) {
    arr[j - k] = arr[j];
  }
  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - (n - k)];
  }
  return arr;
}

console.log(leftRotateByKBetter([1, 2, 3, 4, 5], 2));
// Output: [3, 4, 5, 1, 2]

// time complexity: O(n) where n is the length of the array
// space complexity: O(k) where k is the number of rotations

/** * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 *  Input: [1, 2, 3, 4, 5], k = 2
 *  
 * STEP 1: Calculate k % n
 *  k = 2 % 5 = 2
 * STEP 2: Store first k elements in temp
 *  temp = [1, 2]
 *    STEP 3: Shift the rest of the elements to the left
 *  Array after shifting: [3, 4, 5, 4, 5]
 * STEP 4: Copy temp elements to the end
 * Array after copying temp: [3, 4, 5, 1, 2]
 * Output: [3, 4, 5, 1, 2]
 * //
 */

import { reverse } from "../utils/reverseArray.js";

function leftRotateByK(arr, k) {
  let n = arr.length;
  k = k % n;
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}

console.log(leftRotateByK([1, 2, 3, 4, 6, 7], 3));
// Output: [4, 6, 7, 1, 2, 3]

// time complexity: O(2n) where n is the length of the array
// space complexity: O(1) where k is the number of rotations

/** * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 *
 * Input: [1, 2, 3, 4, 5], k = 2
 *
 *
 * STEP 1: Calculate k % n
 * k = 2 % 5 = 2
 * STEP 2: Reverse first k elements
 * Array after reversing first 2 elements: [2, 1, 3, 4, 5]
 * STEP 3: Reverse remaining n-k elements
 * Array after reversing last 3 elements: [2, 1, 5, 4, 3]
 * STEP 4: Reverse the entire array
 * Array after reversing the entire array: [3, 4, 5, 1, 2]
 *
 * Output: [3, 4, 5, 1, 2]
 */

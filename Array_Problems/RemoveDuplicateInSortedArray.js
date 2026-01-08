// Question: Write a function that removes duplicate elements from a sorted array and returns a new array with only unique elements.

// BRUTE FORCE APPROACH:
function RemoveDuplicate_BF(arr) {
  let n = arr.length;
  let elementSet = new Set();
  for (let i = 0; i < n; i++) {
    elementSet.add(arr[i]);
  }
  let i = 0;
  for (let item of elementSet) {
    if (elementSet.has(item)) {
      arr[i++] = item;
    } else {
      return;
    }
  }
  return arr.slice(0, elementSet.size);
}
Output: [1, 2, 3, 4, 5];

// time complexity: O(nlogn+n) where n is the length of the array
// space complexity: O(n) as we are using a set to store unique elements

// OPTIMIZED APPROACH:

function RemoveDuplicate_Optimized(arr) {
  let n = arr.length;
  let i = 0;
  for (let j = 1; j < n; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return arr.slice(0, i + 1);
}

console.log(RemoveDuplicate_Optimized([1, 2, 2, 3, 4, 4, 5, 5, 5])); // Output: [1, 2, 3, 4, 5]
console.log(RemoveDuplicate_Optimized([1, 1, 1, 1, 1])); // Output: [1]

// time complexity: O(n) where n is the length of the array
// space complexity: O(1) as we are not using any extra space

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 *  Input: [1, 2, 2, 3, 4, 4, 5, 5, 5]
 * STEP 1: Initialize i = 0
 * STEP 2: Iterate through the array with j from 1 to 8
 * j = 1: arr[0] = 1, arr[1] = 2 → arr[1] = 2, i = 1 (updated)
 * j = 2: arr[1] = 2, arr[2] = 2 → duplicate (no change)
 * j = 3: arr[1] = 2, arr[3] = 3 → arr[2] = 3, i = 2 (updated)
 * j = 4: arr[2] = 3, arr[4] = 4 → arr[3] = 4, i = 3 (updated)
 * j = 5: arr[3] = 4, arr[5] = 4 → duplicate (no change)
 * j = 6: arr[3] = 4, arr[6] = 5 → arr[4] = 5, i = 4 (updated)
 * j = 7: arr[4] = 5, arr[7] = 5 → duplicate (no change)
 * j = 8: arr[4] = 5, arr[8] = 5 → duplicate (no change)
 * STEP 3: End of array reached, unique elements are in arr[0] to arr[4]
 *
 * Output: [1, 2, 3, 4, 5]
 */


// Question: Write a function that takes an array of numbers as input and returns the largest element in the array.

function LargestElement(arr) {
  let n = arr.length;
  let largest = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(LargestElement([3, 9, 1, 4, 2, 8])); // Output: 9

// time complexity: O(n) where n is the length of the array
// space complexity: O(1) as we are using only a constant amount of extra space

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 * 
 * Input: [3, 9, 1, 4, 2, 8]
 * 
 * STEP 1: Initialize largest with the first element
 * largest = 3
 * 
 * STEP 2: Iterate through the array
 * i = 0: arr[0] = 3 → largest = 3 (no change)
 * i = 1: arr[1] = 9 → largest = 9 (updated)
 * i = 2: arr[2] = 1 → largest = 9 (no change)
 * i = 3: arr[3] = 4 → largest = 9 (no change)
 *  i = 4: arr[4] = 2 → largest = 9 (no change)
 * i = 5: arr[5] = 8 → largest = 9 (no change)
 * 
 * STEP 3: End of array reached, largest = 9
 * 
 * Output: 9
 */

// question : Write a function that takes an array of numbers as input and returns the second largest number in the array.

function SecondLargest(arr) {
  let n = arr.length;
  let largest = arr[0];
  let secondLargest = Infinity * -1;
  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (
      arr[i] < largest &&
      (secondLargest === -1 || arr[i] > secondLargest)
    ) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
console.log(SecondLargest([3, 9, 1, 4, 2, 8])); // Output: 8
console.log(SecondLargest([10, -5, 10, -6, 21])); // Output: 10

// time complexity: O(n) where n is the length of the array
// space complexity: O(1) as we are using only a constant amount of extra space

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 *
 * Input: [3, 9, 1, 4, 2, 8]
 *
 * STEP 1: Initialize largest and secondLargest
 * largest = 3
 * secondLargest = -1
 *
 * STEP 2: Iterate through the array
 * i = 1: arr[1] = 9 → largest = 9, secondLargest = 3 (updated)
 * i = 2: arr[2] = 1 → largest = 9, secondLargest = 3 (no change)
 * i = 3: arr[3] = 4 → largest = 9, secondLargest = 4 (updated)
 * i = 4: arr[4] = 2 → largest = 9, secondLargest = 4 (no change)
 * i = 5: arr[5] = 8 → largest = 9, secondLargest = 8 (updated)
 *
 * STEP 3: End of array reached, secondLargest = 8
 *
 * Output: 8
 */

/**
 * COUNTING SORT ALGORITHM
 * 
 * DESCRIPTION:
 * Counting Sort is a non-comparison sorting algorithm that works by counting
 * the occurrences of each unique value in the input array. It is efficient for
 * sorting integers or objects with a limited range of values.
 * 
 * HOW IT WORKS:
 * 1. Find the maximum value in the array
 * 2. Create a count array with size (max + 1), initialized to 0
 * 3. Count occurrences of each element and store in count array
 * 4. Iterate through count array and fill the original array in sorted order
 * 
 * TIME COMPLEXITY: O(n + k) where n is array length, k is the range of input
 * SPACE COMPLEXITY: O(k) where k is the maximum value in the array
 * 
 * BEST FOR: Small range of integers (e.g., 0-100, 0-1000)
 * NOT SUITABLE FOR: Large range of values or negative numbers (without modification)
 */

function countingSort(arr) {
  let maxx = Math.max(...arr);
  let count = new Array(maxx + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  let sortedIndex = 0;
  for (let i = 0; i < count.length + 1; i++) {
    while (count[i] > 0) {
      arr[sortedIndex] = i;
      sortedIndex++;
      count[i]--;
    }
  }
  return arr;
}

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 * 
 * Input: [3, 9, 1, 4, 4, 2, 8]
 * 
 * STEP 1: Find maximum value
 * max = 9
 * 
 * STEP 2: Create count array of size 10 (0 to 9)
 * count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 * 
 * STEP 3: Count occurrences of each element
 * Process arr[0] = 3 → count[3]++ → count = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]
 * Process arr[1] = 9 → count[9]++ → count = [0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
 * Process arr[2] = 1 → count[1]++ → count = [0, 1, 0, 1, 0, 0, 0, 0, 0, 1]
 * Process arr[3] = 4 → count[4]++ → count = [0, 1, 0, 1, 1, 0, 0, 0, 0, 1]
 * Process arr[4] = 4 → count[4]++ → count = [0, 1, 0, 1, 2, 0, 0, 0, 0, 1]
 * Process arr[5] = 2 → count[2]++ → count = [0, 1, 1, 1, 2, 0, 0, 0, 0, 1]
 * Process arr[6] = 8 → count[8]++ → count = [0, 1, 1, 1, 2, 0, 0, 0, 1, 1]
 * 
 * STEP 4: Reconstruct sorted array from count array
 * Index 0: count[0] = 0 → skip
 * Index 1: count[1] = 1 → arr[0] = 1, sortedIndex = 1
 * Index 2: count[2] = 1 → arr[1] = 2, sortedIndex = 2
 * Index 3: count[3] = 1 → arr[2] = 3, sortedIndex = 3
 * Index 4: count[4] = 2 → arr[3] = 4, arr[4] = 4, sortedIndex = 5
 * Index 8: count[8] = 1 → arr[5] = 8, sortedIndex = 6
 * Index 9: count[9] = 1 → arr[6] = 9, sortedIndex = 7
 * 
 * FINAL OUTPUT: [1, 2, 3, 4, 4, 8, 9] ✓ SORTED
 */

console.log(countingSort([3, 9, 1, 4, 4, 2, 8]));

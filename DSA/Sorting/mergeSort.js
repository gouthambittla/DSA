/**
 * MERGE SORT ALGORITHM
 *
 * DESCRIPTION:
 * Merge Sort is a divide-and-conquer algorithm that divides the array into
 * halves recursively until each sub-array contains a single element,
 * then merges them back together in sorted order.
 *
 * HOW IT WORKS:
 * 1. Divide the array into two halves
 * 2. Recursively sort the left half
 * 3. Recursively sort the right half
 * 4. Merge the two sorted halves back together
 * 5. In merge: compare elements from both arrays and add the smaller one
 *
 * TIME COMPLEXITY: O(n log n) - consistent across all cases
 * SPACE COMPLEXITY: O(n) - requires additional space for merging
 *
 * BEST CASE: O(n log n)
 * AVERAGE CASE: O(n log n)
 * WORST CASE: O(n log n)
 * STABLE: Yes - maintains relative order of equal elements
 *
 * SUITABLE FOR: Large datasets, when consistent O(n log n) is needed
 */

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const right = arr.slice(mid);
  const left = arr.slice(0, mid);
  const leftArr = mergeSort(left);
  const rightArr = mergeSort(right);
  return merge(leftArr, rightArr);
}

function merge(left, right) {
  let sortedArr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sortedArr.push(left[i]);
    i++;
  }
  while (j < right.length) {
    sortedArr.push(right[j]);
    j++;
  }
  return sortedArr;
}

console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
// Expected output: [11, 12, 22, 25, 34, 64, 90]

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 *
 * Input: [38, 27, 43, 3]
 *
 * DIVIDE PHASE:
 * mergeSort([38, 27, 43, 3])
 *   mid = 2
 *   ├─ mergeSort([38, 27])        ← Left half
 *   │   mid = 1
 *   │   ├─ mergeSort([38]) → [38] (base case)
 *   │   └─ mergeSort([27]) → [27] (base case)
 *   │   merge([38], [27]) → [27, 38]
 *   │
 *   └─ mergeSort([43, 3])         ← Right half
 *       mid = 1
 *       ├─ mergeSort([43]) → [43] (base case)
 *       └─ mergeSort([3]) → [3] (base case)
 *       merge([43], [3]) → [3, 43]
 *
 * MERGE PHASE:
 * merge([27, 38], [3, 43])
 * Compare 27 & 3: 3 < 27 → add 3 → [3]
 * Compare 27 & 43: 27 < 43 → add 27 → [3, 27]
 * Compare 38 & 43: 38 < 43 → add 38 → [3, 27, 38]
 * 43 remaining → add 43 → [3, 27, 38, 43]
 *
 * FINAL OUTPUT: [3, 27, 38, 43] ✓ SORTED
 */

console.log(mergeSort([1, 6, 2, 9, 5]));

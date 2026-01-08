/**
 * QUICK SORT ALGORITHM
 *
 * DESCRIPTION:
 * Quick Sort is a divide-and-conquer algorithm that selects a 'pivot' element
 * and partitions the array around it. Elements smaller than the pivot go to the
 * left, and elements greater go to the right. Then it recursively sorts both parts.
 *
 * HOW IT WORKS:
 * 1. Select a pivot element (here: last element)
 * 2. Partition: separate elements into left (< pivot) and right (>= pivot)
 * 3. Recursively sort the left partition
 * 4. Recursively sort the right partition
 * 5. Combine: left sorted + pivot + right sorted
 *
 * TIME COMPLEXITY: O(n log n) average, O(n²) worst case
 * SPACE COMPLEXITY: O(log n) - due to recursion stack depth
 *
 * BEST CASE: O(n log n) - when pivot divides array evenly
 * AVERAGE CASE: O(n log n)
 * WORST CASE: O(n²) - when pivot is always smallest or largest
 * STABLE: No - does not maintain relative order of equal elements
 *
 * SUITABLE FOR: General-purpose sorting, in-place sorting variant
 */

function QuickSort(arr) {
  const n = arr.length;
  if (n <= 1) {
    return arr;
  }
  const pivot = arr[n - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
}

/**
 * DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 *
 * Input: [6, 3, 8, 1, 4]
 *
 * CALL 1: QuickSort([6, 3, 8, 1, 4])
 * pivot = 4 (last element)
 * left = [3, 1] (elements < 4)
 * right = [6, 8] (elements >= 4)
 * return [...QuickSort([3, 1]), 4, ...QuickSort([6, 8])]
 *
 * CALL 2a: QuickSort([3, 1])
 * pivot = 1 (last element)
 * left = [] (no elements < 1)
 * right = [3] (elements >= 1)
 * return [...QuickSort([]), 1, ...QuickSort([3])]
 *
 * CALL 3a: QuickSort([]) → [] (base case)
 * CALL 3b: QuickSort([3]) → [3] (base case)
 *
 * RESULT 2a: [1, 3]
 *
 * CALL 2b: QuickSort([6, 8])
 * pivot = 8 (last element)
 * left = [6] (elements < 8)
 * right = [] (no elements >= 8, but 8 equals pivot)
 * return [...QuickSort([6]), 8, ...QuickSort([])]
 *
 * CALL 3c: QuickSort([6]) → [6] (base case)
 * CALL 3d: QuickSort([]) → [] (base case)
 *
 * RESULT 2b: [6, 8]
 *
 * COMBINE: [1, 3] + [4] + [6, 8] = [1, 3, 4, 6, 8]
 *
 * FINAL OUTPUT: [1, 3, 4, 6, 8] ✓ SORTED
 */

console.log(QuickSort([64, 34, 25, 12, 22, 11, 90]));

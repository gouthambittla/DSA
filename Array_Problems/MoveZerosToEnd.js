// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.

// Naive Approach: Using Extra Space
function moveZerosToEndNaive(arr) {
  let n = arr.length;
  let temp = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      temp.push(arr[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (i < temp.length) {
      arr[i] = temp[i];
    } else {
      arr[i] = 0;
    }
  }

  return arr;
}

// Example usage of Naive Approach:
console.log(moveZerosToEndNaive([0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]));
// Output: [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]

/*
Time Complexity: O(N)
Space Complexity: O(N)
*/

// Efficient Approach: In-Place Swapping
import { swap } from "../Utils/Swap.js";

function moveZerosToEnd(arr) {
  let n = arr.length;
  let j = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }
  if (j == -1) return arr;
  for (let i = j + 1; i < n; i++) {
    if (arr[i] != 0) {
      swap(arr, i, j);
      j++;
    }
  }
  return arr;
}

// Example usage:
console.log(moveZerosToEnd([0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]));
// Output: [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]

/*Time Complexity: O(N)
Space Complexity: O(1)
*/




// # Move Zeros to End - Debug Trace

// ## Naive Approach Debug Trace

// **Input:** `[0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]`
// **Array Length:** 13

// ### FIRST PASS: Collecting Non-Zero Elements

// | Step | Index | arr[i] | Type     | Action      | temp Array               |
// | ---- | ----- | ------ | -------- | ----------- | ------------------------ |
// | 1    | 0     | 0      | Zero     | Skip        | []                       |
// | 2    | 1     | 1      | Non-Zero | Add to temp | [1]                      |
// | 3    | 2     | 9      | Non-Zero | Add to temp | [1, 9]                   |
// | 4    | 3     | 8      | Non-Zero | Add to temp | [1, 9, 8]                |
// | 5    | 4     | 4      | Non-Zero | Add to temp | [1, 9, 8, 4]             |
// | 6    | 5     | 0      | Zero     | Skip        | [1, 9, 8, 4]             |
// | 7    | 6     | 0      | Zero     | Skip        | [1, 9, 8, 4]             |
// | 8    | 7     | 2      | Non-Zero | Add to temp | [1, 9, 8, 4, 2]          |
// | 9    | 8     | 7      | Non-Zero | Add to temp | [1, 9, 8, 4, 2, 7]       |
// | 10   | 9     | 0      | Zero     | Skip        | [1, 9, 8, 4, 2, 7]       |
// | 11   | 10    | 6      | Non-Zero | Add to temp | [1, 9, 8, 4, 2, 7, 6]    |
// | 12   | 11    | 0      | Zero     | Skip        | [1, 9, 8, 4, 2, 7, 6]    |
// | 13   | 12    | 9      | Non-Zero | Add to temp | [1, 9, 8, 4, 2, 7, 6, 9] |

// **After First Pass:** temp = [1, 9, 8, 4, 2, 7, 6, 9]

// ### SECOND PASS: Placing Elements Back

// | Step | Index | Action        | Value | Array State                             |
// | ---- | ----- | ------------- | ----- | --------------------------------------- |
// | 1    | 0     | Place temp[0] | 1     | [1, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9] |
// | 2    | 1     | Place temp[1] | 9     | [1, 9, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9] |
// | 3    | 2     | Place temp[2] | 8     | [1, 9, 8, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9] |
// | 4    | 3     | Place temp[3] | 4     | [1, 9, 8, 4, 4, 0, 0, 2, 7, 0, 6, 0, 9] |
// | 5    | 4     | Place temp[4] | 2     | [1, 9, 8, 4, 2, 0, 0, 2, 7, 0, 6, 0, 9] |
// | 6    | 5     | Place temp[5] | 7     | [1, 9, 8, 4, 2, 7, 0, 2, 7, 0, 6, 0, 9] |
// | 7    | 6     | Place temp[6] | 6     | [1, 9, 8, 4, 2, 7, 6, 2, 7, 0, 6, 0, 9] |
// | 8    | 7     | Place temp[7] | 9     | [1, 9, 8, 4, 2, 7, 6, 9, 7, 0, 6, 0, 9] |
// | 9    | 8     | Fill with 0   | 0     | [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 6, 0, 9] |
// | 10   | 9     | Fill with 0   | 0     | [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 9] |
// | 11   | 10    | Fill with 0   | 0     | [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0] |
// | 12   | 11    | Fill with 0   | 0     | [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0] |
// | 13   | 12    | Fill with 0   | 0     | [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0] |

// **Output:** `[1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]`

// ---

// ## Efficient Approach Debug Trace

// **Input:** `[0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]`
// **Array Length:** 13

// ### STEP 1: Finding First Zero

// | Index | arr[i] | Status | j Value |
// | ----- | ------ | ------ | ------- |
// | 0     | 0      | Found! | j = 0 ✓ |

// **First zero found at index 0, j = 0**

// ### STEP 2: Moving Non-Zeros to Front (Two-Pointer Approach)

// | Iteration | i   | j   | arr[i] | arr[j] | Action                | Array After                                    |
// | --------- | --- | --- | ------ | ------ | --------------------- | ---------------------------------------------- |
// | 1         | 1   | 0   | 1      | 0      | Swap arr[1] ↔ arr[0]  | [1, 0, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9], j → 1 |
// | 2         | 2   | 1   | 9      | 0      | Swap arr[2] ↔ arr[1]  | [1, 9, 0, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9], j → 2 |
// | 3         | 3   | 2   | 8      | 0      | Swap arr[3] ↔ arr[2]  | [1, 9, 8, 0, 4, 0, 0, 2, 7, 0, 6, 0, 9], j → 3 |
// | 4         | 4   | 3   | 4      | 0      | Swap arr[4] ↔ arr[3]  | [1, 9, 8, 4, 0, 0, 0, 2, 7, 0, 6, 0, 9], j → 4 |
// | 5         | 5   | 4   | 0      | 0      | Skip (zero)           | [1, 9, 8, 4, 0, 0, 0, 2, 7, 0, 6, 0, 9]        |
// | 6         | 6   | 4   | 0      | 0      | Skip (zero)           | [1, 9, 8, 4, 0, 0, 0, 2, 7, 0, 6, 0, 9]        |
// | 7         | 7   | 4   | 2      | 0      | Swap arr[7] ↔ arr[4]  | [1, 9, 8, 4, 2, 0, 0, 0, 7, 0, 6, 0, 9], j → 5 |
// | 8         | 8   | 5   | 7      | 0      | Swap arr[8] ↔ arr[5]  | [1, 9, 8, 4, 2, 7, 0, 0, 0, 0, 6, 0, 9], j → 6 |
// | 9         | 9   | 6   | 0      | 0      | Skip (zero)           | [1, 9, 8, 4, 2, 7, 0, 0, 0, 0, 6, 0, 9]        |
// | 10        | 10  | 6   | 6      | 0      | Swap arr[10] ↔ arr[6] | [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0, 0, 9], j → 7 |
// | 11        | 11  | 7   | 0      | 0      | Skip (zero)           | [1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0, 0, 9]        |
// | 12        | 12  | 7   | 9      | 0      | Swap arr[12] ↔ arr[7] | [1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0], j → 8 |

// **Output:** `[1, 9, 8, 4, 2, 7, 6, 9, 0, 0, 0, 0, 0]`

// ---

// ## Complexity Analysis

// ### Naive Approach

// - **Time Complexity:** O(N) - Two passes through array
// - **Space Complexity:** O(N) - Extra temp array needed

// ### Efficient Approach

// - **Time Complexity:** O(N) - Single pass after finding first zero
// - **Space Complexity:** O(1) - In-place modification, no extra space

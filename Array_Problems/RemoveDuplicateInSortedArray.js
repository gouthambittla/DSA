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
Output: [1, 2, 3, 4, 5]

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

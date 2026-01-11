
// Two Sum Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// example: nums = [2,7,11,15], target = 9
// output: [0,1] because nums[0] + nums[1] = 2 + 7 = 9


function twoSum(nums, target) {
  let n = nums.length;
  let hashMap = new Map();
  for (let i = 0; i < n; i++) {
    let diff = target - nums[i];
    if (hashMap.has(diff)) {
      return [hashMap.get(diff), i];
    }
    hashMap.set(nums[i], i);
  }
}
// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]


// Time Complexity: O(n) where n is the number of elements in the array
// Space Complexity: O(n) for the hash map used to store elements

/*DEBUG EXAMPLE WITH STEP-BY-STEP TRACE:
 * Input: nums = [2, 7, 11, 15], target = 9
 * STEP 1: Initialize an empty hashMap
 * STEP 2: Iterate through the array
 * i = 0: nums[0] = 2, diff = 9 - 2 = 7
 *         hashMap = {2: 0}
 * i = 1: nums[1] = 7, diff = 9 - 7 = 2
 *         hashMap has 2, return [hashMap.get(2), 1] → [0, 1]
 * STEP 3: End of array reached
 *
 * Output: [0, 1]
 */


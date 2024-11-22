// @leet start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 0) {
      nums[l] = nums[r];
      l++;
    }
  }

  while (l < nums.length) {
    nums[l] = 0;
    l++;
  }
}
// @leet end


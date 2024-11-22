// @leet start
function findMaxConsecutiveOnes(nums: number[]): number {
  let res = 0;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    while (nums[r] !== 1) {
      l = r + 1;
    }
    res = Math.max(r - l + 1, res);
  }
  return res;
}
// @leet end


// @leet start
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let l = 0;
  let pro = 1;
  let ans = 0;
  for (let r = 0; r < nums.length; r++) {
    pro *= nums[r];
    while (pro >= k) {
      pro /= nums[l];
      l++;
    }
    ans += r - l + 1;
  }
  return ans;
}
// @leet end


// @leet start
function minSubArrayLen(target: number, nums: number[]): number {
  let l = 0;
  let sum = 0;
  let ans = Infinity;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      ans = Math.min(r - l + 1, ans);
      sum -= nums[l];
      l++;
    }
  }
  return ans === Infinity ? 0 : ans;
}
// @leet end

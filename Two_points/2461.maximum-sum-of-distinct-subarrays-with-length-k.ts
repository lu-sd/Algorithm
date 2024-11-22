// @leet start
function maximumSubarraySum(nums: number[], k: number): number {
  let set = new Set();
  let l = 0;
  let sum = 0;
  let ans = 0;

  for (let r = 0; r < nums.length; r++) {
    while (set.has(nums[r])) {
      set.delete(nums[l]);
      sum -= nums[l];
      l++;
    }

    set.add(nums[r]);
    sum += nums[r];

    if (r - l + 1 === k) {
      ans = Math.max(ans, sum);
      set.delete(nums[l]);
      sum -= nums[l];
      l++;
    }
  }

  return ans;
}
// @leet end


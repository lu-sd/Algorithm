// @leet start
function subarraySum(nums: number[], k: number): number {
  const map = new Map([[0, 1]]);
  let ans = 0;
  let sum = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    const diff = sum - k;
    if (map.has(diff)) {
      ans += map.get(diff);
    }

    map.set(sum, (map.get(sum) | 0) + 1);
  }

  return ans;
}
// @leet end

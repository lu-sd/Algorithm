// @leet start
function checkSubarraySum(nums: number[], k: number): boolean {
  const map = new Map([[0, -1]]);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const rem = sum % k;
    if (map.has(rem)) {
      if (i - map.get(rem) > 1) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }
  return false;
}
// @leet end


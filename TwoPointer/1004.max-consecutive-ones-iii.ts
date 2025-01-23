// @leet start
function longestOnes(nums: number[], k: number): number {
  let count0 = 0;
  let l = 0;
  let ans = 0;

  for (let index = 0; index < nums.length; index++) {
    count0 += 1 - nums[index];

    while (count0 > k) {
      count0 -= 1 - nums[l];
      l++;
    }

    ans = Math.max(ans, index - l + 1);
  }

  return ans;
}
// @leet end


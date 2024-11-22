// @leet start
function nextGreaterElements(nums: number[]): number[] {
  const n = nums.length;
  const ans = Array(n).fill(-1);
  const st: number[] = [];

  for (let i = 0; i < 2 * n; i++) {
    const x = nums[i % n];
    while (st.length && x > nums[st[st.length - 1]]) {
      ans[st.pop()!] = x;
    }
    if (i < n) {
      st.push(i);
    }
  }

  return ans;
}
// @leet end


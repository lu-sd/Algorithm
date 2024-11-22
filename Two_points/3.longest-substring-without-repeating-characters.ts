// @leet start
function lengthOfLongestSubstring(s: string): number {
  const set = new Set();
  let l = 0;
  let ans = 0;
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}
// @leet end


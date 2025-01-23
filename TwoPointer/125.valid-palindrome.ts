// @leet start
function isPalindrome(s: string): boolean {
  s = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase()
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
// @leet end


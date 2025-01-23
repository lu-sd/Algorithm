// @leet start
function maxArea(height: number[]): number {
  let ans = 0;
  let l = 0;
  let r = height.length - 1

  while(l < r) {
    const Area = (r - l) * Math.min(height[l], height[r]);
    ans = Math.max(ans, Area);
    if (height[r] > height[l]) {
      l++;
    }else{
      r--
    }
  }
  return ans;
}
// @leet end


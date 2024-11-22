// @leet start
function trap(height: number[]): number {
  let l = 0;
  const n = height.length;
  let r = n - 1;
  let lMax = height[0];
  let rMax = height[n - 1];
  let ans = 0;

  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    rMax = Math.max(rMax, height[r]);
    if (lMax < rMax) {
      ans += lMax - height[l];
      l++;
    } else {
      ans += rMax - height[r];
      r--;
    }
  }
  return ans;
}
// @leet end


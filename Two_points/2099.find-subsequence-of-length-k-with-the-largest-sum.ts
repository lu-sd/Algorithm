// @leet start
function maxSubsequence(nums: number[], k: number): number[] {
  const res:Record<string,number>[] = []
  nums.forEach((x,i) => res.push({i,x}))
  res.sort((a,b) => b.x - a.x)
  const ans = res.slice(0,k)
  ans.sort((a,b) => a.i - b.i)
  return ans.forEach((item,idx) => idx)
};
// @leet enduu


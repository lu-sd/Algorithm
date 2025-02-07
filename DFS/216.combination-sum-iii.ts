import { TreeNode } from "./type";

// @leet start
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  function dfs(start: number, sum: number) {
    if (sum === n && path.length === k) {
      res.push([...path]);
    }
    if (sum > n || path.length > k) {
      return;
    }
    for (let i = start; i < 10; i++) {
      path.push(i);
      dfs(i + 1, sum + i);
      path.pop();
    }
  }
  dfs(1, 0);
  return res;
}
// @leet end


import { TreeNode } from "./type";

// @leet start
function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];

  function dfs(start: number) {
    if (path.length == k) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  }

  dfs(1);
  return res;
}
// @leet end


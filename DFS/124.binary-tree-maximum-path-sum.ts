import { TreeNode } from "./type";

// @leet start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
  let ans = -Infinity;
  function dfs(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }
    const left = dfs(node.left);
    const right = dfs(node.right);
    ans = Math.max(left + right + node.val, ans);
    return Math.max(Math.max(left, right) + node.val, 0);
  }

  dfs(root);
  return ans;
}
// @leet end


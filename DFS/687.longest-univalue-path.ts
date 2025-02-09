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

function longestUnivaluePath(root: TreeNode | null): number {
  let ans = 0;

  function dfs(node: TreeNode | null): number {
    if (node === null) {
      return 0;
    }
    let l = dfs(node.left);
    let r = dfs(node.right);
    if (node.left !== null && node.left.val == node.val) {
      l++;
    } else {
      l = 0;
    }
    if (node.right !== null && node.right.val == node.val) {
      r++;
    } else {
      r = 0;
    }
    ans = Math.max(l + r, ans);
    return Math.max(l, r);
  }
  dfs(root);
  return ans;
}
// @leet end


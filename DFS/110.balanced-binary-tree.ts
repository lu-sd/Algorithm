import { TreeNode } from "./type"

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
function getHeight(node: TreeNode | null): number {
  if (node === null) {
    return 0
  }
  const left = getHeight(node.left)
  const right = getHeight(node.right)
  if (left === -1) {
    return -1
  }
  if (right === -1 || Math.abs(left - right) > 1) {
    return -1
  }
  return Math.max(left, right) + 1
}
function isBalanced(root: TreeNode | null): boolean {
  return getHeight(root) !== -1

};
// @leet end

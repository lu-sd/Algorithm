import { TreeNode} from "./type" 

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


function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  function isSame(l:TreeNode | null,r:TreeNode|null ){
    if(l == null && r == null) return true
    if(l == null || r == null) return false
    if(l.val !== r.val) return false
    return isSame(l.left, r.left) && isSame(l.right, r.right)
  }

  if(root == null) return false
  return isSame(root, subRoot) || isSubtree(root.left, subRoot)||isSubtree(root.right, subRoot)
    
};
// @leet end

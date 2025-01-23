package leetcode

// @leet start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSameT(l, r *TreeNode) bool {
	if l == nil || r == nil {
		return l == r
	}
	return l.Val == r.Val && isSameT(l.Left, r.Right) && isSameT(l.Right, r.Left)
}

func isSymmetric(root *TreeNode) bool {
	return isSameT(root.Left, root.Right)
}

// @leet end


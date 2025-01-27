package leetcode

import "math"

// @leet start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func dfs(node *TreeNode, min, max int) bool {
	if node == nil {
		return true
	}
	if node.Val >= max || node.Val <= min {
		return false
	}
	return dfs(node.Left, min, node.Val) && dfs(node.Right, node.Val, max)
}

func isValidBST(root *TreeNode) bool {
	return dfs(root, math.MinInt, math.MaxInt)
}

// @leet end


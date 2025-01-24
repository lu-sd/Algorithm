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
func getHeight(node *TreeNode) int {
	if node == nil {
		return 0
	}

	left := getHeight(node.Left)
	if left == -1 {
		return -1
	}
	right := getHeight(node.Right)
	if right == -1 {
		return -1
	}
	if abs(left, right) > 1 {
		return -1
	}
	return max(left, right) + 1
}

func abs(a, b int) int {
	if a-b >= 0 {
		return a - b
	} else {
		return b - a
	}
}

func isBalanced(root *TreeNode) bool {
	return getHeight(root) != -1
}

// @leet end


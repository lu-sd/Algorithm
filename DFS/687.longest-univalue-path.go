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
func longestUnivaluePath(root *TreeNode) int {
	ans := 0
	var dfs func(node *TreeNode) int
	dfs = func(node *TreeNode) int {
		if node == nil {
			return 0
		}
		l := dfs(node.Left)
		r := dfs(node.Right)
		if node.Left != nil && node.Left.Val == node.Val {
			l++
		} else {
			l = 0
		}
		if node.Right != nil && node.Right.Val == node.Val {
			r++
		} else {
			r = 0
		}
		ans = max(l+r, ans)
		return max(l, r)
	}
	dfs(root)
	return ans
}

// @leet end


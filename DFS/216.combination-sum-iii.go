package leetcode

import "slices"

// @leet start
func combinationSum3(k int, n int) [][]int {
	res := [][]int{}
	path := []int{}
	var dfs func(start, sum int)
	dfs = func(start, sum int) {
		if sum == n && len(path) == k {
			res = append(res, slices.Clone(path))
		}
		if sum > n || len(path) > k {
			return
		}
		for i := start; i < 10; i++ {
			path = append(path, i)
			dfs(i+1, sum+i)
			path = path[:len(path)-1]
		}
	}
	dfs(1, 0)
	return res
}

// @leet end


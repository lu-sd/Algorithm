package leetcode

import "slices"

// @leet start
func combinationSum(candidates []int, target int) [][]int {
	res := [][]int{}
	path := []int{}

	var dfs func(start, sum int)
	dfs = func(start, sum int) {
		if sum == target {
			res = append(res, slices.Clone(path))
			return
		}
		if sum > target {
			return
		}
		for i := start; i < len(candidates); i++ {
			path = append(path, candidates[i])
			dfs(i, sum+candidates[i])
			path = path[:len(path)-1]
		}
	}
	dfs(0, 0)
	return res
}

// @leet end


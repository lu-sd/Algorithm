package leetcode

// @leet start
func lengthOfLongestSubstring(s string) int {
	set := make(map[rune]bool)
	l, ans := 0, 0

	for r, char := range s {
		for set[char] {
			delete(set, rune(s[l]))
			l++
		}
		set[char] = true
		if r-l+1 > ans {
			ans = r - l + 1
		}
	}

	return ans
}

// @leet end

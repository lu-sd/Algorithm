// @leet start
function checkInclusion(s1: string, s2: string): boolean {
  const checkC = s1.length
  const origC = s2.length
  if(origC < checkC) return false

  const check = Array(26).fill(0)
  const original = Array(26).fill(0)
  for (const l of s1) {
    check[l.charCodeAt(0) -97]++
  }
  let l = 0
  for (const c of s2) {
    const curL = c.charCodeAt(0) -97
    original[curL]++
    while(original[curL] > check[curL]){
      original[s2.charCodeAt(l) - 97]--
      l++
    }
    if(original.join('')===check.join('')) return true
  }
   return false
};
// @leet end

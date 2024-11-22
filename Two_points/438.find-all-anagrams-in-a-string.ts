// @leet start
function findAnagrams(s: string, p: string): number[] {
  const m = s.length;
  const n = p.length;
  if (m < n) return [];

  const check = Array(26).fill(0);
  const original = Array(26).fill(0);
  for (const l of p) {
    check[l.charCodeAt(0) - 97]++;
  }

  let l = 0;
  const res: number[] = [];

  for (const c of s) {
    const curL = c.charCodeAt(0) - 97;
    original[curL]++;

    while (original[curL] > check[curL]) {
      original[s.charCodeAt(l) - 97]--;
      l++;
    }

    if (original.join("") === check.join("")) {
      res.push(l);
    }
  }

  return res;
}
// @leet end


// @leet start
fg): string {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res = maxPalid(res, s, i, i);
    res = maxPalid(res, s, i, i + 1);
  }
  return res;
}

function maxPalid(res: string, s: string, l: number, r: number) {
  let cur = "";
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    cur = s.slice(l, r + 1);
    l--;
    r++;
  }
  return cur.length > res.length ? cur : res;
}
// @leet end


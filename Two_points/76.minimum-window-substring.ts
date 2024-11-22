// @leet start
function minWindow(s: string, t: string): string {
  if (s.length < t.length) return "";

  const cnT = new Map();
  const cnS = new Map();

  for (const l of t) {
    cnT.set(l, (cnT.get(l) | 0) + 1);
  }

  let ansL = -1;
  let ansR = s.length;
  let l = 0;
  let res = s.length

  for (let r = 0; r < s.length; r++) {
    const c = s[r]
    cnS.set(c, (cnS.get(c) | 0) + 1);

    while (isCover()) {
      if (ansR - ansL > r - l) {
        ansL = l;
        ansR = r;
      }
      res = Math.min(r - l + 1,res)
    }
  }

  function isCover() {
    for (const [c, fre] of cnT) {
      if ((cnS.get(c) || 0) < fre) return false;
    }
    return true;
  }
}
// @leet end


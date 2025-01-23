// @leet start
function minimumCardPickup(cards: number[]): number {
  let ans = Infinity;
  let l = 0;
  const map = new Map();

  for (let i = 0; i < cards.length; i++) {
    map.set(cards[i], (map.get(cards[i]) | 0) + 1);

    while(map.get(cards[i]) > 1){
      ans = Math.min(i - l + 1,ans)
      map.set(cards[l],map.get(cards[l]) - 1)
      l++
    }
  }

  return ans === Infinity ? -1 :ans
}
// @leet end


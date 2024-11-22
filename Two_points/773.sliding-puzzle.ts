// @leet start
function slidingPuzzle(board: number[][]): number {
  const target = "123450";
  const moves = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];
  const puzzle = board.flat().join("");
  const queue: [string, number, number][] = [[puzzle, puzzle.indexOf("0"), 0]];
  const seen = new Set(puzzle);

  while (queue.length) {
    const [state, zeroIdx, step] = queue.shift()!;
    if (state === target) {
      return step;
    }

    for (const move of moves[zeroIdx]) {
      const stateArr = state.split("");
      [stateArr[zeroIdx], stateArr[move]] = [stateArr[move], stateArr[zeroIdx]];
      const newState = stateArr.join("");
      if (!seen.has(newState)) {
        queue.push([newState, move, step + 1]);
        seen.add(newState);
      }
    }
  }
  return -1;
}
// @leet end

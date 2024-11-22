// @leet start
function dailyTemperatures(temperatures: number[]): number[] {
  const ans = Array(temperatures.length).fill(0);
  const st: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (st.length && temperatures[i] > temperatures[st[st.length - 1]]) {
      const top = st.pop()!;
      ans[top] = i - top;
    }
    st.push(i);
  }

  return ans;
}
// @leet end


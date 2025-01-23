// @leet start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const map: Map<number, number> = new Map();
  nums1.forEach((item, idx) => map.set(item, idx));
  const stack: number[] = [];
  const ans = Array(nums1.length).fill(-1);

  nums2.forEach((x) => {
    while (stack.length && x > stack[stack.length - 1]) {
      ans[map.get(stack.pop()!)!] = x;
    }
    if (map.has(x)) {
      stack.push(x);
    }
  });

  return ans;
}

// @leet end


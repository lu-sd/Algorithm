// @leet start
function calculate(s: string): number {
  function isNum(s: string) {
    return !isNaN(+s);
  }

  let c = "";
  let sign = "+";
  let num = 0;
  const stack: number[] = [];
  s = s.replace(/\s+/g, "");

  for (let i = 0; i < s.length; i++) {
    c = s[i];

    if (isNum(c)) {
      num = num * 10 + +c;
    }

    if (i === s.length - 1 || !isNum(c)) {
      switch (sign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack[stack.length - 1] *= num;
          break;
        case "/":
          stack[stack.length - 1] = Math.trunc(stack[stack.length - 1] / num);
          break;
      }
      sign = c;
      num = 0;
    }
  }
  return stack.reduce((arr, cur) => arr + cur, 0);
}
// @leet end


module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  bracketsConfig.forEach((item) => OPEN_BRACKETS.push(item[0]));

  const BRACKETS_PAIR = {};
  bracketsConfig.forEach((item) => (BRACKETS_PAIR[item[1]] = item[0]));

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topElement = stack[stack.length - 1];

    if (stack.length !== 0 && BRACKETS_PAIR[currentSymbol] === topElement) {
      stack.pop();
    } else if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

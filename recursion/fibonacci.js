const fibs = function (input) {
  arr1 = [0];
  arr2 = [0, 1];
  if (input === 1) return arr1;
  if (input === 2) return arr2;
  if (input > 2) {
    for (let i = 2; i < input; i++) {
      const ind = arr2[arr2.length - 1] + arr2[arr2.length - 2];
      arr2.push(ind);
    }
    return arr2;
  }
};

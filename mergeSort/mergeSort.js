const mergerSort = function (input) {
  if (!Array.isArray(input)) {
    throw new TypeError("enter array!!!");
  }
  if (input.length <= 1) {
    return input;
  }
  if (input.length > 1) {
    const mid = Math.floor(input.length / 2);
    const left = input.slice(0, mid);
    const right = input.slice(mid);
    const input1 = mergerSort(left);
    const input2 = mergerSort(right);
    return merge(input1, input2);
  }
};

function merge(input1, input2) {
  const C = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < input1.length && j < input2.length) {
    if (input1[i] < input2[j]) {
      C[k++] = input1[i++];
    } else {
      C[k++] = input2[j++];
    }
  }
  for (; i < input1.length; i++) {
    C[k++] = input1[i];
  }
  for (; j < input2.length; j++) {
    C[k++] = input2[j];
  }
  return C;
}
export{mergerSort};
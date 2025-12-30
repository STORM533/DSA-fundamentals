const mergerSort = function (input) {
  console.log("sup");
  console.log(input);
  if (!Array.isArray(input)) {
    return console.log("Wrong input dawg");
  }
  if (input.length === 1 || input.length === 0) {
    return input;
  }
  if (input.length > 1) {
    mid = Math.floor(input.length / 2);
    const left = input.slice(0, mid);
    const right = input.slice(mid);
    console.log("left:", left);
    console.log("right:", right);
    mergerSort(left);
    mergerSort(right);
  }
};
mergerSort([2, 4, 3, 5, 1]);

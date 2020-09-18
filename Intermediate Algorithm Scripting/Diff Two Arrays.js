function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  function diff(a, b) {
    return a.filter(n => b.indexOf(n) === -1);
  }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

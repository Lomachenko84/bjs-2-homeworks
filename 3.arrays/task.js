function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
}



function advancedFilter(arr) {
  let resultArrlet = arr.filter( (elem) =>  elem % 3 == 0).filter((i) => i > 0).map((elem) => elem * 10);
  return resultArrlet
}

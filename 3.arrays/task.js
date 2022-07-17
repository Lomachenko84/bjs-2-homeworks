function compareArrays(arr1, arr2) {
  let result;
  function n(element, index) {
    if (element === arr2[index]) return true;
    if (element !== arr2[index]) return false;
  }
  if (arr1.length !== arr2.length) return false;

  result = arr1.every(n)
  return result; // boolean
}



function advancedFilter(arr) {
  let resultArrlet = arr.filter(function (elem) {
    return elem % 3 == 0 
  });
  let d = resultArrlet.filter(function (i) {
    return i > 0
  });
  let map = d.map(function (elem) {
    return elem * 10
  });
  return map;
}
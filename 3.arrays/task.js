function compareArrays(arr1, arr2) {
  let result;

    result = arr1.every((a, index) => a === arr2[index]) &&
      arr1.length === arr2.length

    return result;
}

function advancedFilter(arr) {
  let resultArr;

  let result = arr.filter(item => item > 0 && item % 3 === 0);
      resultArr = result.map(item => item * 10);
     return resultArr;
}

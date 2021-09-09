function compareArrays(arr1, arr2) {
  let result;

  // Ваш код

    result = arr1.every((a, index) => a === arr2[index]) &&
      arr1.length === arr2.length

    return result; // boolean

}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  let result = arr.filter(item => item > 0 && item % 3 === 0);
      resultArr = result.map(item => item * 10);
     return resultArr; // array

}

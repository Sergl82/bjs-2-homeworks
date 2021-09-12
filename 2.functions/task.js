// Задание 1
function getArrayParams(arr) {
  let min = Infinity, max = -Infinity, sum = 0, avg = 0;
  // Ваш код
 for (let i = 0; i < arr.length; i++) {
   sum += arr[i]
   min = Math.min.apply(null, arr)
   max = Math.max.apply(null, arr)
   avg = +(sum / arr.length).toFixed(2);
 }

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
     for ( let i = 0; i < arr.length; i++) {
       sum += arr[i];
     }
      return sum;
}

function makeWork(arrOfArr, func) {
   let max = -Infinity;
   let sum;
  // Ваш кода
     for (let i = 0; i < arrOfArr.length; i++) {
             sum = func(arrOfArr[i]);
        if ( sum > max) {
          max = sum;
      }
     }
   return max
}

// Задание 3
function worker2(arr) {
    let max;
    let min;
    let difference;
  // Ваш код
      max = Math.max.apply(null, arr);
      min = Math.min.apply(null, arr)
      difference = max - min;

   return difference;
}
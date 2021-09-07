// Задание 1
function getArrayParams(arr) {
  let min = 0, max = 0, sum = 0, avg = 0;

  // Ваш код
 for (let i = 0; i < arr.length; i++) {
   sum += arr[i]
   min = arr.reduce((min,arr) => arr < min ? arr : min, arr[0])
   max = arr.reduce((max,arr) => arr > max ? arr : max, arr[0])
   avg = +(sum / arr.length).toFixed(2);
 }
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum;
  let num1;
  let num2;

  // Ваш код
    num1 = arr[0].reduce((a, b) => a + b, 0);
    num2 = arr[1].reduce((a, b) => a + b, 0);

  (num1 < num2) ? sum = num2 : sum = num1;
  console.log(num1, num2, sum)
  return sum;

}


function makeWork(arrOfArr, func) {
  let max = 0;
  let sum;
  let num = [];
  // Ваш кода
  for (let i = 0; i < arrOfArr.length; i++) {
    num.push(arrOfArr[i]);
  }
  sum = func(num);
    (max < sum) ? max = sum : sum === sum;

  return max
}console.log((makeWork([[10,20,30],[-40,-50,-65]], worker2)))

// Задание 3
function worker2(arr) {
  // Ваш код
 const a = arr[0];
 const b = arr[1];
 const c = [];
 let total;

    for(let i = 0; i <= b.length-1; i++) {
      c.push(a[i] - b[i]);
      c.sort((a, b) => b - a);
    }
    total = c.reduce((x, y) => x - y);
    total = (total < 0) ? total * -1 : total;
  return total;
}


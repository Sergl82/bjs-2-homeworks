function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict"
  let D = b * b - 4 * a * c;
  arr = [];
  if (D < 0) {
    arr = [];
  }else if (D === 0) {
    arr.push(-b/(2*a));
  }else if (D > 0) {
    arr.push((-b + Math.sqrt(D) )/(2*a));
    arr.push((-b - Math.sqrt(D) )/(2*a));
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict"
  let totalAmount;
  // код для задачи №2 писать здесь
  let S = amount - contribution;
  let P = percent / 1200;
  let startDate = new Date();
  let endDate = date;
  const n = (endDate.getFullYear() - startDate.getFullYear())*12 + (endDate.getMonth() - startDate.getMonth());

  if(P === 0 || percent === '')  {
    totalAmount = ('Параметр "Процентная ставка" содержит неправильное значение "test"');
  }else if (contribution === '') {
    totalAmount = ('Параметр "Начальный взнос" содержит неправильное значение "test"');
  }else if (amount === '' || amount === 0) {
    totalAmount = ('Параметр "Общая стоимость" содержит неправильное значение "test"');
  } else totalAmount = +((S * (P + P / (Math.pow((1 + P), n) - 1))) * n).toFixed(2);

  return totalAmount;

}

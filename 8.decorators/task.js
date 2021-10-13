function cachingDecoratorNew(func) {
  // Ваш код
  let cash = [];

  return function wrapper (...args) {
      const hash = args.join(",");
      const idx = cash.findIndex((item) => !!item[hash]);
      if (idx !== -1) {
          console.log("кэш");
          return "Из кэша: " + cash[idx][hash];
      } else {
          let result = {};
          result[hash] = func.call(this, ...args);
          cash.push(result);
          if (cash.length > 5) {
              cash.shift();
          }
          return "Вычисляем: " + result[hash];
      }
    };
}


function debounceDecoratorNew(func, ms) {
    let id;
    let start = true;

    return function (...args) {
        if (start) {
          start = false;
            return func.call(this, ...args);
        }
        clearTimeout(id);

        id = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let id;
    let start = true;
    throttled.count = 0;

    function throttled (...args) {
      throttled.count ++;
        if (start) {
          start = false;
          return func.call(this, ...args);
        }
        clearTimeout(id);

        id = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    }
    return throttled;
}

const sendSignal = () => console.log('Сигнал послан');
const upgradedSendSignal2 = debounceDecorator2(sendSignal,2000);
setTimeout(upgradedSendSignal2());
setTimeout(upgradedSendSignal2(),300);
setTimeout(upgradedSendSignal2(),900);
setTimeout(upgradedSendSignal2(),1200);
setTimeout(upgradedSendSignal2(),2300);
setTimeout(upgradedSendSignal2(),4400);
setTimeout(upgradedSendSignal2(),4500);
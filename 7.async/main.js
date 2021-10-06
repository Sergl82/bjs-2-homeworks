// тут вы можете вызывать функции из task.js
function testCase () {
 const clock = new AlarmClock();
 clock.addClock('18:41', () => console.log("Подъем"), 1);
 clock.addClock('18:42', f => console.log("Подъем"), 2);
 clock.addClock('20:07', f => console.log("Подъем"), 3);
 clock.addClock('01:39', f => console.log("Подъем"), 4);
 clock.addClock('01:39', f => console.log("Пора вставать"), 5);
 clock.removeClock(2);
 clock.addClock('01:32', f => console.log("Иди умываться") );
clock.addClock('01:40', f => console.log("Вставай а то проспишь"),6)
 clock.clearAlarms();
  clock.printAlarms();
 clock.addClock('01:40', f => console.log("Вставай а то проспишь"), 4);
 clock.printAlarms();
 clock.start()
console.log(clock)
 console.log(clock.getCurrentFormattedTime())
}

console.log(testCase())
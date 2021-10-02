class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, func, id) {
    if (id === undefined) {
      throw new Error('error text')
    }
    let alarm = 0;
    this.alarmCollection.forEach(item => alarm = item.id)
    if (alarm !== id) {
      this.alarmCollection.push({time, func, id});
    }else console.error("Error: Конфликт id")
}

  removeClock(id){
    this.alarmCollection.filter((item) => {
     if (item.id === id){
       this.alarmCollection.splice(item.id.length, 1);
       return 'Звонок удален'
     }else return "НЕУДАЛОСЬ УДАЛИТЬ ЗВОНОК"
    })
    return this.alarmCollection;
  }

  getCurrentFormattedTime(){
   const data = new Date();
   let Hour = data.getHours();
   let Minute = data.getMinutes();

   Hour = (Hour < 10) ? '0' + Hour : Hour;
   Minute = (Minute < 10) ? '0' + Minute : Minute;
   return (Hour + ':' + Minute)
  }

  start() {
    let checkClock = () => {
      this.alarmCollection.filter(value => {
        if(value.time === this.getCurrentFormattedTime()){
      return value.func()
    }
    })
     }
     const id = setInterval(checkClock, 60000)
      if (Number.isNaN(this.timerId)) {
        this.timerId = {id};
      }
  }

  stop(){
    let clearClock;
    if (this.timerId > 0) {
      clearInterval(this.timerId);
    }
      clearClock = this.alarmCollection.splice(0, this.alarmCollection.length)
      return clearClock;
  }

  printAlarms(){
      this.alarmCollection.forEach(value => console.log(value.id, value.time))

  }
  clearAlarms(){
      clearInterval(this.timerId);
      this.alarmCollection.splice(0, this.alarmCollection.length)

  }
}

function testCase () {
 const clock = new AlarmClock();
 clock.addClock('01:39', f => console.log("Подъем"), 1);
 clock.addClock('01:39', f => console.log("Подъем"), 2);
 clock.addClock('01:39', f => console.log("Подъем"), 3);
 clock.addClock('01:39', f => console.log("Подъем"), 4);
 clock.addClock('01:39', f => console.log("Пора вставать"), 5);
 clock.removeClock(2);
 //clock.addClock('01:32', f => console.log("Иди умываться") );
clock.addClock('01:40', f => console.log("Вставай а то проспишь"),6)
 //clock.clearAlarms();
   clock.printAlarms();
 clock.addClock('01:40', f => console.log("Вставай а то проспишь"), 4);
 clock.printAlarms();
 clock.start()

}
console.log(testCase())
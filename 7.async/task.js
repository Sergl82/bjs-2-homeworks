class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.timerId = null;
  }
  addClock(time, func, id){
    if(id === undefined) {
      throw new Error('error text')
    }else if(this.timerId === id) {
      console.error();
    }else this.alarmCollection.push({time, func, id})

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
   const Hour = data.getHours();
   const Minutes = data.getMinutes();
   return (Hour + ':' + Minutes)
  }

  start(){
    let checkClock = ((addClock) => {
     if(this.getCurrentFormattedTime() === addClock.time){

     }
    })
    if(this.timerId === undefined){
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(checkClock)
      })
      return setInterval(this.timerId, 60000);
    }


  }

  stop(){

  }

  printAlarms(){

  }
  clearAlarms(){

  }
}

const timer = new AlarmClock();
timer.addClock('16:50', 2, 2);
timer.removeClock(2)
console.log(timer.getCurrentFormattedTime())
console.log(timer.alarmCollection)
console.log(timer.start())
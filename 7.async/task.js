class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, func, id) {
    if (id === undefined) {
      throw new Error('error text')
    }
    let alarms = this.alarmCollection.includes(id);
    if(alarms !== true) {
      this.alarmCollection.push({time, func, id})
    }else
    console.error("Error")
  }


  removeClock(id){
    let remove = this.alarmCollection.filter((item) => item.id !== id)
     if (remove === true){
       return 'Звонок удален'
     }else return "НЕУДАЛОСЬ УДАЛИТЬ ЗВОНОК"
    }


  getCurrentFormattedTime(){
   const data = new Date();
   let hour = data.getHours();
   let minute = data.getMinutes();

   hour = (hour < 10) ? '0' + hour : hour;
   minute = (minute < 10) ? '0' + minute : minute;
   return (hour + ':' + minute)
  }

  start() {
     let checkClock = () => {
      this.alarmCollection.forEach(item => {
        if (item.time === this.getCurrentFormattedTime()) {
        return console.log(item.func())
        }

      })
    }
     const id = setInterval(checkClock, 60000)
      if (Number.isNaN(this.timerId)) {
        this.timerId = id;
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



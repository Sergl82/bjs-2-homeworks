class AlarmClock {
  constructor () {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, func, id) {
    if (id === undefined) {
      throw new Error('error text')
    }
    let alarms = this.alarmCollection.find(value => value.id === id)
      if (alarms === undefined) {
        this.alarmCollection.push({time, func, id })
      } else
        return console.error("Error измените id")
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter((value) =>  value.id !== id )
    if(this.alarmCollection.includes(id) !== true) {
      console.log('Звонок удален')
    }else
      console.log("Не удалось удалить звонок")
      return this.alarmCollection
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
      const id = setInterval(checkClock, 60000);
      return this.timerId = id;
  }

  stop(){
    if (this.timerId > 0) {
      clearInterval(this.timerId);
      this.timerId = NaN;
    }

  }

  printAlarms(){
      this.alarmCollection.forEach(value => console.log(value.id, value.time))

  }
  clearAlarms(){
      clearInterval(this.timerId);
      this.alarmCollection.splice(0, this.alarmCollection.length)
      this.timerId = null;

  }
}

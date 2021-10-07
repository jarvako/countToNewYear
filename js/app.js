const newYears = '1 Jan 2022'
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")


function countTime(){
    const currentDay = new Date();
    const newYearsDay = new Date(newYears)
    const diffDay = newYearsDay - currentDay
    const totalSeconds = diffDay/1000
    const days = Math.floor(totalSeconds/3600/24)
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60
    const seconds = Math.floor(totalSeconds) % 60
    daysEl.innerHTML = timeCorrect(days)
    hoursEl.innerHTML = timeCorrect(hours)
    minsEl.innerHTML = timeCorrect(mins)
    secondsEl.innerHTML = timeCorrect(seconds)
}

function timeCorrect(time){
    return time < 10? `0${time}` : time
}

setInterval(countTime, 1000)
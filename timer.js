/* Countdown Timer */

const countDownDate = new Date("Nov 01, 2024 00:00:00").getTime();
const timer = setInterval(function(){
    timeBetweenDates(countDownDate);
},1000);

function timeBetweenDates(toDate){
    let dateEntered = toDate;
    let now = new Date().getTime();
    let difference = dateEntered - now;

    if (difference <= 0){
        clearInterval(timer);
    } else {
        let days = Math.floor(difference / (1000*60*60*24));
        let hours = Math.floor(difference % (1000*60*60*24) / (1000*60*60));
        let minutes = Math.floor(difference % (1000*60*60) / (1000*60));
        let seconds = Math.floor(difference % (1000*60) / 1000);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;
        
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }
}
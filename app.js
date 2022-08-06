const months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveAway = document.querySelector(".giveaway");
const deadLine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date()
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

//let futureDate = new Date(2022,4,24,11,30,0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

let month = futureDate.getMonth();
month = months[month];


const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveAway.textContent = `giveAway ends on ${day} ${date}  ${month} ${year} ${hours}:${minutes}am`;

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today =  new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 *1000;

    let days = t / oneDay;
    days = Math.floor(days)

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    function format(item){
        if (item < 10){
            return item = `0${item}`
        }
        return item
    }

    const values = [days, hours, minutes, seconds];
    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    });
    if(t< 0){
        clearInterval(countdown);
        deadLine.innerHTML =`<h4 class ="expired"> sorry, this giveaway has expired`
    }
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime()
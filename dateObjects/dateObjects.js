// Date(year, month, day, hour, minute, second, ms)
const date = new Date();
date.setFullYear(2024)
// console.log(date);


const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

// console.log(year, month, day, hours, minutes, seconds, dayOfWeek);




const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");

if (date2 > date1){
    console.log("Happy New Year!")
}
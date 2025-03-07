// switch = can be an efficient replacement to many else if statements

let day = 1
switch(day){
    case 1:
        console.log("Today is monday");
        break;
    case 2:
        console.log("Today is tuesday");
        break;
    case 3:
        console.log("Today is wednesday");
        break;
    case 4:
        console.log("Today is thursday");
        break;
    case 5:
        console.log("Today is friday");
        break;
    case 6:
        console.log("Today is saturday");
        break;
    case 7:
        console.log("Today is sunday");
        break;
    default:
        console.log(` ${day} is not a day`);
}
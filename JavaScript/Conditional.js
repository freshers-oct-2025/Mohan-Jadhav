// if else statement 

let colour = prompt("Enter traffic light colour:");

if (colour == "red") {
    console.log("stop");
}
else if (colour == "green") {
    console.log("go");
}
else if (colour == "yellow") {
    console.log("wait");
} else {
    console.log("it not a signal colour")
}

//switch case statement

let day = prompt("Enter a number (1-7):");

switch (day) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input");
}

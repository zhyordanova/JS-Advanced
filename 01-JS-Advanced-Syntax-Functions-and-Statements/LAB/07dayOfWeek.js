function dayOfWeek(string) {

    switch (string) {
        case "Monday":
            return 1;
        case "Tuesday":
            return 2;
        case "Wednesday":
            return 3;
        case "Thursday":
            return 4;
        case "Friday":
            return 5;
        case "Saturday":
            return 6;
        case "Sunday":
            return 7;
            break;
        default:
            return "error";
            break;
    }
}

    
console.log(dayOfWeek("Monday"))
console.log(dayOfWeek("Friday"))
console.log(dayOfWeek("Invalid"))





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

/**
 * function dayOfWeek(string) {
    let day_of_week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
    if (day_of_week.includes(string)) {
        result = day_of_week.indexOf(string) + 1
        return result;
    } else {
        return "error";
    }
}
console.log(dayOfWeek("Monday"));
 */


    
console.log(dayOfWeek("Monday"))
console.log(dayOfWeek("Friday"))
console.log(dayOfWeek("Invalid"))





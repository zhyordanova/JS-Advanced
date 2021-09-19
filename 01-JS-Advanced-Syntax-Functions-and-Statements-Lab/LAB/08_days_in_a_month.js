function dayOfMonth(month, year) {
    let date = new Date(year, month, 0).getDate();

    console.log(date)
}

dayOfMonth(1, 2012)
dayOfMonth(2, 2021)
function getWeekDay(date) {
    let dayArr = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

    return dayArr[date.getDay()];
}

let date = new Date(2014, 0, 3);
console.log( getWeekDay(date));

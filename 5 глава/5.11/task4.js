function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

let date = new Date(2014, 0, 6);
console.log( getDateAgo(date, 5));
console.log( getDateAgo(date, 111));
console.log( getDateAgo(date, 534));
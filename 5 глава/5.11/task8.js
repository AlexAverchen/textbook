function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return `{sec} сек. назад`;
    }

    let minute = Math.floor(diff / 60000);
    if (minute < 60) {
        return `{minute} мин. назад`;
    }

    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2));

    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');

}

console.log( formatDate(new Date(new Date - 100000 * 1000)) );
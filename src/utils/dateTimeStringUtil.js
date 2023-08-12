//возвращает отформатированную строку содержащую дату и время
export const dateTimeFormat = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return addZero(date.getDate())
        + '.' + addZero((date.getMonth() + 1))
        + '.' + date.getFullYear()
        + ' ' + addZero(date.getHours())
        + ':' + addZero(date.getMinutes());
}

//добавляет 0 перед числом если число меньше 10
const addZero = (num) => {
    if (num < 10) {
        return '0' + num;
    } else {
        return num;
    }
}
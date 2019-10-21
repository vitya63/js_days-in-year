'use strict'

function isLeapYear(year) {
    if (Number.isInteger(year)) {
        return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    } else {
        throw 'exception';
    }
}

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
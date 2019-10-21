'use strict'

function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function daysInYear(year) {
    try {
        if (!Number.isInteger(year)) {
            throw new Error();
        }
        return isLeapYear(year) ? 366 : 365;
    } catch {
        return 'exception';
    }
}
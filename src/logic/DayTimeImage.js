import morning from './../images/morning.jpg';
import noon from './../images/noon.jpg';
import afternoon from './../images/afternoon.jpg';
import evening from './../images/evening.jpg';
import night from './../images/night.jpg';


/**
* convert 24hour clock time to 12 hour clock
* @param hour @param minute 
* @returns a string that contains time in 12 hour format
*/
export function clock12Hour(hour = currentTime()[0], minute = currentTime()[1]) {
    if (minute < 10) {
        minute = `0${minute}`;
    }

    let time12Hour;
    if (hour > 12) {
        time12Hour = `${hour - 12}:${minute} PM`
    }
    else if (hour === 0) {
        time12Hour = `12:${minute} AM`
    }
    else {
        time12Hour = `${hour}:${minute} AM`
    }

    return time12Hour;
}


/**
 * depending on hour parameter this function 
 * will decide which part of the day is.
 * @param {int} hour
 * @returns (morning, afternoon) etc
 */
export function dayCycleOnTime(hour = currentTime()[0]) {
    let dayPart;
    if (hour > 6 && hour <= 12) dayPart = 'Morning'
    else if (hour > 12 && hour <= 16) dayPart = 'Noon'
    else if (hour > 16 && hour <= 18) dayPart = 'Afternoon'
    else if (hour > 18 && hour <= 19) dayPart = 'Evening'
    else {
        dayPart = 'Night 🌛'
    }

    return dayPart;
}


/**
 * @returns image depending on time such as return morning image
 * if it's morning time
 */
export function imageOnDayTime(dayPeriod = dayCycleOnTime()) {
    let image;
    switch (dayPeriod) {
        case 'Morning':
            image = morning;
            break;

        case 'Noon':
            image = noon;
            break;

        case 'Afternoon':
            image = afternoon;
            break;

        case 'Evening':
            image = evening;
            break;

        default:
            image = night;
    }

    return image;
}


/**
 * @returns current hour and minute as array.  
 * first element of the array is hour and second is minute 
 * (24 hour time format)
 */
export function currentTime() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    return [hour, minute];
}
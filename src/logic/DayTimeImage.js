import morning from './../images/morning.jpg';
import noon from './../images/noon.jpg';
import afternoon from './../images/afternoon.jpg';
import evening from './../images/evening.jpg';
import night from './../images/night.jpg';


/**
* convert 24hour clock time to 12 hour clock
* @returns a string that contains time in 12 hour format
*/
export function clock12Hour() {
    const current = currentTime();
    const currentHour = current[0];
    const currentMinute = current[1];

    let time12Hour;
    if (currentHour > 12) {
        time12Hour = `${currentHour - 12}:${currentMinute} PM`
    }
    else if (currentHour === 0) {
        time12Hour = `12:${currentMinute} AM`
    }
    else {
        time12Hour = `${currentHour}:${currentMinute} AM`
    }

    return time12Hour;
}


/**
* depending on current time this function find out
* which part of the day is now.  
* @returns (morning, afternoon) etc
*/
export function dayCycleOnTime() {
    const current = currentTime();
    const currentHour = current[0];

    let dayPart;
    if (currentHour > 6 && currentHour <= 12) dayPart = 'Morning'
    else if (currentHour > 12 && currentHour <= 16) dayPart = 'Noon'
    else if (currentHour > 16 && currentHour <= 18) dayPart = 'Afternoon'
    else if (currentHour > 18 && currentHour <= 19) dayPart = 'Evening'
    else {
        dayPart = 'Night 🌛'
    }

    return dayPart;
}


/**
 * @returns image depending on time such as return morning image
 * if it's morning time
 */
export function imageOnDayTime() {
    let dayPeriod = dayCycleOnTime();

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
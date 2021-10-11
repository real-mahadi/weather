import { clock12Hour } from "./DayTimeImage";

/**
 * @param {float} temperature is the value that need to be converted
 * @returns the celsius float value
 */
export function kelvinToCelsius(temperature) {
    const celsius = temperature - 273.15;

    return Math.round(celsius);
}


/**
 * @param {bigint} unix is unixTimeStamp big int number
 * @returns real life time such as 12:30PM
 */
export function unixToActualTime(unix) {
    const date = new Date(unix * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const time = clock12Hour(hours, minutes)
    return (time);
}
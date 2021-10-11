/**
 * use geolocation to get user's current location
 * @returns an array that contains latitude and longitude of current location.
 * first element is latitude or second and last element is longitude
 */
export async function currentGeoLocation() {
    let p = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    return [p.coords.latitude, p.coords.longitude];
}
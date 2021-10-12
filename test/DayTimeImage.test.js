const check12HourClock = require('./../src/logic/DayTimeImage/clock12Hour')

test('send right time format', () => {
    expect(check12HourClock(16,32)).toBe('4:32 PM')
})
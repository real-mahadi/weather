const check = require('./../src/logic/DayTimeImage')

test('send right time format', () => {
    expect(check.clock12Hour(16,32)).toBe('4:32 PM')
})
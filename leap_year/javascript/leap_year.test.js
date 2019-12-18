import { leapYear} from './leap_year'

test('Year not divisible by 4', () => {
  expect(leapYear(2015)).toBeFalsy()
})

test('Year divisible by 2 and not divisible by 4', () => {
  expect(leapYear(1970)).toBeFalsy()
})

test('Year divisible by 4 and not divisible by 100', () => {
  expect(leapYear(1996)).toBeTruthy()
})

test('Year divisible by 4 and 5', () => {
  expect(leapYear(1960)).toBeTruthy()
})

test('Year dividible by 100 and not divisible by 400', () => {
  expect(leapYear(2100)).toBeFalsy()
})

test('Year divisible by 100 but not by 3', () => {
  expect(leapYear(1900)).toBeFalsy()
})

test('Year divisible by 400', () => {
  expect(leapYear(2000)).toBeTruthy()
})

test('Year divisible by 400 but not by 125', () => {
  expect(leapYear(2400)).toBeTruthy()
})

test('Year divisible by 200 and not divisible by 400', () => {
  expect(leapYear(1800)).toBeFalsy()
})

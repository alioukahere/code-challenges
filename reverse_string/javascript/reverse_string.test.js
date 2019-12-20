import { reverse } from './reverse_string'

test('Test empty string', () => {
  expect(reverse('')).toBe('')
})

test('Test a word', () => {
  expect(reverse('diallo')).toBe('ollaid')
})

test('Test a capitalized word', () => {
  expect(reverse('Kahere')).toBe('erehaK')
})

test('Test a sentence with puntuation', () => {
  expect(reverse('I\'m hungry!')).toBe('!yrgnuh m\'I')
})

test('Test a palindrome', () => {
  expect(reverse('racecar')).toBe('racecar')
})

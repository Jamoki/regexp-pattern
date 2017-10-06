import regExpPattern from './regExpPattern'

test('valid state matches', () => {
  expect(regExpPattern.state.test('WA')).toBeTruthy()
})

test('valid area code matches', () => {
  expect(regExpPattern.areaCode.test('360')).toBeTruthy()
})

test('valid short phone matches', () => {
  expect(regExpPattern.shortPhone.test('360-4421')).toBeTruthy()
  expect(regExpPattern.shortPhone.test('360 2910')).toBeTruthy()
})

test('Invalid short phone does not match', () => {
  expect(regExpPattern.shortPhone.test('360--4421')).toBeFalsy()
  expect(regExpPattern.shortPhone.test('360=2910')).toBeFalsy()
})

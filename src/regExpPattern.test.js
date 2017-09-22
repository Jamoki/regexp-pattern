import regExpPattern from './regExpPattern'

test('valid state matches', () => {
  expect(regExpPattern.state.test('WA')).toBeTruthy()
})

test('valid area code matches', () => {
  expect(regExpPattern.areaCode.test('360')).toBeTruthy()
})

import regExpPattern from './regExpPattern'

test('valid state matches', () => {
  expect(regExpPattern.state.test('WA')).toBeTruthy()
})

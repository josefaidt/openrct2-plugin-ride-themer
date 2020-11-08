import Button from './Button'

describe('Button', () => {
  it('Button without props', () => {
    expect(Button()).toMatchObject({
      type: 'button',
      text: 'Default Text',
      width: 50,
      height: 20,
      onClick: expect.any(Function),
    })
  })

  it('Button with supplied props', () => {
    expect(Button('close', function clickHandler() {})).toMatchObject({
      type: 'button',
      text: 'close',
      width: 50,
      height: 20,
      onClick: expect.any(Function),
    })
  })
})

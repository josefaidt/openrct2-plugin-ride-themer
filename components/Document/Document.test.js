import { Button } from '../'
import { INITIAL_X, INITIAL_Y } from '../constants'
import Document from './Document'

describe('Document', () => {
  let button
  let buttonProps

  beforeEach(() => {
    button = () => Button('close', jest.fn())
    buttonProps = {
      type: 'button',
      text: 'close',
      width: 50,
      height: 20,
      x: INITIAL_X,
      y: INITIAL_Y,
      onClick: expect.any(Function),
    }
  })

  it('should return one button', () => {
    const MyDocument = Document(button())
    const mockReturn = [buttonProps]
    expect(MyDocument).toMatchObject(mockReturn)
  })

  it('should return two vertical buttons', () => {
    const MyDocument = Document(button(), button())
    const mockReturn = [
      buttonProps,
      {
        ...buttonProps,
        y: 45,
      },
    ]

    expect(MyDocument).toMatchObject(mockReturn)
  })

  it('should return two horizontal buttons', () => {
    const MyDocument = Document([button(), button()])
    const mockReturn = [
      buttonProps,
      {
        ...buttonProps,
        x: 61,
      },
    ]

    expect(MyDocument).toMatchObject(mockReturn)
  })
})

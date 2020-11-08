import { Button } from '../'
import Document from './Document'

const width = 50
const height = 20

describe('Document', () => {
  let button

  beforeEach(() => {
    button = () => Button('close', jest.fn())
  })

  it('should return one button', () => {
    const MyDocument = Document(button())
    const mockReturn = [
      {
        type: 'button',
        text: 'close',
        x: 8,
        y: 20,
        width,
        height,
        onClick: expect.any(Function),
      },
    ]
    expect(MyDocument).toMatchObject(mockReturn)
  })

  it('should return two vertical buttons', () => {
    const MyDocument = Document(button(), button())
    const mockReturn = [
      {
        type: 'button',
        text: 'close',
        x: 8,
        y: 20,
        width,
        height,
        onClick: expect.any(Function),
      },
      {
        type: 'button',
        text: 'close',
        x: 8,
        y: 45,
        width,
        height,
        onClick: expect.any(Function),
      },
    ]

    expect(MyDocument).toMatchObject(mockReturn)
  })

  it('should return two horizontal buttons', () => {
    const MyDocument = Document([button(), button()])
    const mockReturn = [
      {
        type: 'button',
        text: 'close',
        x: 8,
        y: 20,
        width,
        height,
        onClick: expect.any(Function),
      },
      {
        type: 'button',
        text: 'close',
        x: 63,
        y: 20,
        width,
        height,
        onClick: expect.any(Function),
      },
    ]

    expect(MyDocument).toMatchObject(mockReturn)
  })
})

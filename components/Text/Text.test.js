import Text from './Text'

describe('Text/Label', () => {
  let text
  const label = 'Sample'
  beforeEach(() => {
    text = (_label = label) => Text(_label)
  })

  it('should display `Sample`', () => {
    const mockReturn = {
      type: 'label',
      text: label,
    }
    expect(text()).toMatchObject(mockReturn)
  })

  it('should render with dynamic width', () => {
    const label = 'Hello, World!'
    const mockReturn = {
      type: 'label',
      text: label,
      width: 70,
    }
    expect(text(label)).toMatchObject(mockReturn)
  })
})

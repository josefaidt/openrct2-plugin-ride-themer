import { generateTextLength } from '../utils'

export default function Text(text = 'sample') {
  const label = text.split('\n')
  const longestLine = label.reduce((acc, value) => (acc?.length > `${value}`.length ? acc : value))
  return {
    type: 'label',
    text,
    height: Math.floor(10 * label.length),
    width: generateTextLength(longestLine),
    onChange: function () {},
  }
}

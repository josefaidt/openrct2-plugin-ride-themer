export default function Text(text = 'sample') {
  const label = text.split('\n')
  return {
    type: 'label',
    text,
    height: 10 * label.length,
    width: Math.floor(5.4 * label?.[0]?.length),
    onChange: function () {},
  }
}

export default function Button(text = 'Default Text', onClick = function onClick() {}) {
  return {
    type: 'button',
    text,
    width: 50,
    height: 20,
    onClick,
  }
}

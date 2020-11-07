import { displayName as name, version } from './package.json'

function button(text, onClick) {
  const y = 0
  return {
    type: 'button',
    text,
    x: 10,
    y: y,
    width: 50,
    height: 20,
    onClick,
  }
}

export default function action() {
  try {
    park.postMessage({
      type: 'award',
      text: `ride-themer ${version} has been called`,
    })
  } catch (error) {
    console.log(error)
  }
  let window
  window = ui.getWindow(name)
  if (window) {
    window.bringToFront()
  }

  window = ui.openWindow({
    title: name,
    classification: name,
    width: 200,
    height: 115,
    widgets: [
      button('close', function close() {
        window.close()
      }),
    ],
  })
}
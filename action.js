import { name as id, displayName as name, version } from './package.json'
import { Document, Button, Text } from './components'

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
  window = ui.getWindow(id)
  if (window) {
    window.bringToFront()
  }

  function closeWindow() {
    return window.close()
  }

  // need ride name - from rideType?
  // need ride station type - stationStyle

  window = ui.openWindow({
    title: name,
    classification: id,
    width: 800,
    height: 400,
    widgets: Document(
      Text('Hello, World!'),
      Button('close', closeWindow),
      Button('close', closeWindow),
      [Button('close', closeWindow), Button('close', closeWindow)],
      Text('Wow this is a multi-tiered\nmutli-level\nupside down'),
      Button('close', closeWindow),
      Text(
        context
          .getAllObjects('ride')
          .map(ride => ride.name)
          .join('\n')
      )
    ),
  })
}

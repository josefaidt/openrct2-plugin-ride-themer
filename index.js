// Expose the OpenRCT2 to Visual Studio Code's Intellisense
/// <reference path=".support/openrct2.d.ts" />

import {
  name as id,
  displayName as name,
  author,
  version,
  license as licence,
} from './package.json'
import action from './action'

function main() {
  if (typeof ui !== 'undefined') {
    ui.registerMenuItem(name, action)
  } else {
    console.log('OpenRCT2 is running in headless mode, UI not registered')
  }

  try {
    park.postMessage({
      type: 'award',
      text: `ride-themer ${version} has been initialized!`,
    })
  } catch (error) {
    console.log(error)
  }

  context.registerIntent({
    key: `${id}.open-window`,
    title: 'Open Ride Themer',
    shortcut: 'SHIFT+T',
    action,
  })
}

registerPlugin({
  name,
  version,
  authors: [author],
  type: 'local',
  licence,
  main,
})

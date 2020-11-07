// Expose the OpenRCT2 to Visual Studio Code's Intellisense
/// <reference path="support/openrct2.d.ts" />

import { displayName as name, author, version, license as licence } from './package.json'
import action from './action'

function main() {
  try {
    park.postMessage({
      type: 'award',
      text: `ride-themer ${version} has been initialized!`,
    })
  } catch (error) {
    console.log(error)
  }

  ui.registerMenuItem(name, action)

  // context.registerIntent({
  //   key: 'ride-themer.open-window',
  //   title: 'Open Ride Themer',
  //   shortcut: 'SHIFT+T',
  //   action,
  // })
}

registerPlugin({
  name,
  version,
  authors: [author],
  type: 'local',
  licence,
  main,
})

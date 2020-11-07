// Expose the OpenRCT2 to Visual Studio Code's Intellisense
/// <reference path="support/openrct2.d.ts" />
import { author, version, license } from './package.json'
import action from './action'

function main() {
  // Add a menu item under the map icon on the top toolbar
  ui.registerMenuItem('Ride Themer', action)

  // Register a new intent that calls our function. The player can invoke the intent via the UI or using a keyboard shortcut which the player can configure. Make sure your intent has a unique key that will not clash with any other plugin. Prefixing the key with your plugin name is encouraged.
  context.registerIntent({
    key: 'ride-themer.open-window',
    title: 'Open Ride Themer',
    shortcut: 'SHIFT+T',
    action,
  })
}

registerPlugin({
  name: 'Ride Themer',
  version,
  authors: [author],
  type: 'local',
  licence: license,
  main,
})

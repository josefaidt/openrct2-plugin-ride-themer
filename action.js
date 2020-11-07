import { version } from './package.json'

export default function action() {
  try {
    park.postMessage({
      type: 'award',
      text: `ride-themer ${version} has been initialised!`,
    })
  } catch (error) {
    console.log(error)
  }
}

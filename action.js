export default function action() {
  try {
    park.postMessage({
      type: 'award',
      text: 'ride-themer.js has been initialised!',
    })
  } catch (error) {
    console.log(error)
  }
}

import { INITIAL_X, INITIAL_Y, SPACING } from '../constants'

export default function Document(...widgets) {
  function setDefaults(widget) {
    if (!widget.x) widget.x = INITIAL_X
    if (!widget.y) widget.y = INITIAL_Y
  }

  return [].concat(
    ...widgets.map((widget, index) => {
      // X axis adjustments
      if (Array.isArray(widget) && widget.length) {
        const previous = widgets[index - 1]
        for (let i = 0; i < widget.length; i++) {
          const w = widget[i]
          // set default x and y
          setDefaults(w)
          // inherit y position from previous y widget
          if (previous?.y && previous?.y !== INITIAL_Y && previous?.height) {
            w.y = previous.y + previous.height + SPACING
          }
          // adjust for previous x widget
          const prev = widget[i - 1]
          if (prev?.x && prev?.width) {
            w.x = prev.x + prev.width + SPACING
          }
        }
      } else {
        setDefaults(widget)
      }

      // Y axis adjustments
      if (index !== 0) {
        let prev
        if (Array.isArray(widgets[index - 1]) && widgets[index - 1].length) {
          prev = widgets[index - 1][0]
        } else {
          prev = widgets[index - 1]
        }

        if (prev?.y && prev?.height) {
          widget.y = prev.y + prev.height + SPACING
        }
      }

      return widget
    })
  )
}

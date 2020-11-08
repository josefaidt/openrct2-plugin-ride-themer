export default function Document(...widgets) {
  const y = 20
  const x = 8
  const spacing = 5

  function setDefaults(widget) {
    if (!widget.x) widget.x = x
    if (!widget.y) widget.y = y
  }

  return [].concat(
    ...widgets.map((widget, index) => {
      if (Array.isArray(widget) && widget.length) {
        for (let i = 0; i < widget.length; i++) {
          const w = widget[i]
          setDefaults(w)
          const prev = widget[i - 1]
          if (prev?.x && prev?.width) {
            w.x = prev.x + prev.width + spacing
          }
        }
      } else {
        setDefaults(widget)
      }

      if (index !== 0) {
        let prev
        if (Array.isArray(widgets[index - 1]) && widgets[index - 1].length) {
          prev = widgets[index - 1][0]
        } else {
          prev = widgets[index - 1]
        }

        if (prev?.y && prev?.height) {
          widget.y = prev.y + prev.height + spacing
        }
      }

      return widget
    })
  )
}
export const on = (element, event, handler) => {
  if (!document.addEventListener) {
    element.attachEvent('on' + event, handler)
  } else {
    if (element && event && handler) {
      element.addEventListener(event, handler, false)
    }
  }
}

export const off = (element, event, handler) => {
  if (!document.removeEventListener) {
    element.detachEvent('on' + event, handler)
  } else {
    if (element && event) {
      element.removeEventListener(event, handler, false)
    }
  }
}

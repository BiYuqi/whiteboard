export function adaptEvent (isMobile) {
  if (isMobile) {
    return {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    }
  }

  return {
    start: 'mousedown',
    move: 'mousemove',
    end: 'mouseup'
  }
}

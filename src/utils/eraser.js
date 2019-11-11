export const eraser = ({ currentBrush, context, strokeStyle, callback }) => {
  if (currentBrush === 'eraser') {
    context.globalCompositeOperation = 'destination-out'
    context.strokeStyle = 'rgba(0, 0, 0, 1)'
  } else {
    context.globalCompositeOperation = 'source-over'
    context.strokeStyle = strokeStyle
    callback && callback()
  }
}

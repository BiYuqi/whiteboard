export function initialCanvasProperty (context, data) {
  Object.keys(data).forEach(item => {
    context[item] = data[item]
  })
}

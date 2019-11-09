const getWidthHeight = (ctx) => {
  // const { width, height } = window.getComputedStyle(ctx, null)
  return {
    width: window.innerWidth,
    height: window.innerHeight - 54
  }
}

export function adaptRetinaScreen (ctx, context, devicePixelRatio) {
  const { width, height } = getWidthHeight(ctx)
  if (devicePixelRatio) {
    ctx.style.width = `${width}px`
    ctx.style.height = `${height}px`
    ctx.height = height * devicePixelRatio
    ctx.width = width * devicePixelRatio
    context.scale(devicePixelRatio, devicePixelRatio)
  } else {
    ctx.width = width
    ctx.height = height
  }
}

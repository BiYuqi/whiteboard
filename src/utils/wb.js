export default class Normal {
  constructor (props) {
    const { ctx, context, config } = props
    this.ctx = ctx
    this.context = context
    this.config = config
    this.isDrawing = false
    this.point = {}
    this.history = []
    this.step = 0
  }

  setBrush () {

  }

  bindEvent () {
    const { start, move, end } = this.adaptEvent()
    this.ctx.addEventListener(start, this.start.bind(this), false)
    this.ctx.addEventListener(move, this.move.bind(this), false)
    this.ctx.addEventListener(end, this.end.bind(this), false)
  }

  init (config = this.config) {
    Object.keys(config).forEach(item => {
      this.context[item] = config[item]
    })
  }

  adaptEvent () {
    if (this.config.isMobile) {
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

  adapterScreen (devicePixelRatio) {
    const width = window.innerWidth
    const height = window.innerHeight - 54
    if (devicePixelRatio) {
      this.ctx.style.width = `${width}px`
      this.ctx.style.height = `${height}px`
      this.ctx.height = height * devicePixelRatio
      this.ctx.width = width * devicePixelRatio
      this.context.scale(devicePixelRatio, devicePixelRatio)
    } else {
      this.ctx.width = width
      this.ctx.height = height
    }
  }

  offset () {
    return {
      left: this.ctx.getBoundingClientRect().left,
      top: this.ctx.getBoundingClientRect().top
    }
  }

  start (e) {
    e.preventDefault()
    const { left, top } = this.offset()
    this.isDrawing = true
    this.point.x = e.clientX - left
    this.point.y = e.clientY - top
    if (this.isDrawing) {
      this.context.beginPath()
      this.context.moveTo(this.point.x, this.point.y)
      this.history.push({
        x: this.point.x,
        y: this.point.y,
        snapshot: this.context.getImageData(0, 0, this.ctx.clientWidth, this.ctx.clientHeight)
      })
      this.step++
    }
  }

  move (e) {
    e.preventDefault()
    const { left, top } = this.offset()
    this.point.x = e.clientX - left
    this.point.y = e.clientY - top
    if (this.isDrawing) {
      this.context.lineTo(this.point.x, this.point.y)
      this.context.stroke()
      this.history.push({
        x: this.point.x,
        y: this.point.y,
        snapshot: this.context.getImageData(0, 0, this.ctx.clientWidth, this.ctx.clientHeight)
      })
      this.step++
    }
  }

  end () {
    this.isDrawing = false
  }

  undo () {
    const prev = this.history[this.currentStep - 1]
    if (prev) {
      this.context.putImageData(prev.snapshot, 0, 0)
      this.currentStep -= 1
    }
  }

  redo () {
    const next = this.history[this.currentStep + 1]
    if (next) {
      this.context.putImageData(next.snapshot, 0, 0)
      this.currentStep += 1
    }
  }
}

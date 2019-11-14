export default class Normal {
  constructor (props) {
    const { ctx, context, config } = props
    this.ctx = ctx
    this.context = context
    this.isDrawing = false
    this.point = {}
    this.history = []
    this.step = 0

    this.defaultConfig = {
      ...config,
      isMobile: /phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent),
      devicePixelRatio: Math.max(window.devicePixelRatio || 1, 1),
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight - 54
    }
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
    if (this.defaultConfig.isMobile) {
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

  resizeCanvas () {
    const { devicePixelRatio, canvasWidth, canvasHeight } = this.defaultConfig
    if (devicePixelRatio) {
      this.ctx.style.width = `${canvasWidth}px`
      this.ctx.style.height = `${canvasHeight}px`
      this.ctx.height = canvasHeight * devicePixelRatio
      this.ctx.width = canvasWidth * devicePixelRatio
      this.context.scale(devicePixelRatio, devicePixelRatio)
    } else {
      this.ctx.width = canvasWidth
      this.ctx.height = canvasHeight
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
      this.context.lineTo(this.point.x, this.point.y)
      this.context.stroke()
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
    }
  }

  end () {
    this.isDrawing = false
    this.step++
    this.history.push({
      snapshot: this.context.getImageData(0, 0, this.ctx.width, this.ctx.height)
    })
  }

  undo () {
    const prev = this.history[this.step - 2]
    if (this.step <= 0) {
      this.step = 0
      return
    }
    if (prev) {
      this.context.putImageData(prev.snapshot, 0, 0)
      this.step--
    }
  }

  redo () {
    if (this.step >= this.history.length) {
      this.step = this.history.length
      return
    }
    const next = this.history[this.step]
    if (next) {
      this.context.putImageData(next.snapshot, 0, 0)
      this.step += 1
    }
  }

  clear () {
    this.context.clearRect(0, 0, this.ctx.width, this.ctx.height)
    this.step = 0
    this.history.length = 0
  }

  toDataURL ({ type = 'image/png', encoderOptions }) {
    // image/jpeg
    // image/webp
    return this.ctx.toDataURL(type, encoderOptions)
  }
}

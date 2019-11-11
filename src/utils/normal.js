export default class Normal {
  constructor (props) {
    const { ctx, context } = props
    this.ctx = ctx
    this.context = context
    this.isDrawing = false
    this.point = {}
    this.offset = {
      left: this.ctx.getBoundingClientRect().left,
      top: this.ctx.getBoundingClientRect().top
    }
  }

  start (e) {
    e.preventDefault()
    this.isDrawing = true
    this.point.x = e.clientX - this.offset.left
    this.point.y = e.clientY - this.offset.top
    if (this.isDrawing) {
      this.context.beginPath()
      this.context.moveTo(this.point.x, this.point.y)
    }
  }

  move (e) {
    e.preventDefault()
    this.point.x = e.clientX - this.offset.left
    this.point.y = e.clientY - this.offset.top
    if (this.isDrawing) {
      this.context.lineTo(this.point.x, this.point.y)
      this.context.stroke()
    }
  }

  end () {
    this.isDrawing = false
  }
}

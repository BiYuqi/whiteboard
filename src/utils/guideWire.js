export default class GuideWire {
  constructor (props) {
    this.ctx = props.ctx
    this.context = props.context
  }

  drawHorizontalLine (y) {
    this.context.beginPath()
    this.context.moveTo(0, y)
    this.context.lineTo(this.ctx.width, y)
    this.context.stroke()
  }

  drawVerticalLine (x) {
    this.context.beginPath()
    this.context.moveTo(x, 0)
    this.context.lineTo(x, this.ctx.height)
    this.context.stroke()
  }

  drawGuideLine (x, y) {
    this.context.save()
    this.context.lineWidth = 0.5
    this.context.strokeStyle = 'rgba(0, 255, 255, 1)'
    this.drawVerticalLine(x)
    this.drawHorizontalLine(y)
    this.context.restore()
  }
}

<template>
  <canvas class="whiteboard" ref="whiteboard"></canvas>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { initialCanvasProperty, adaptRetinaScreen, adaptEvent } from '../../utils/base'
export default {
  data () {
    return {
      isDrawing: false,
      point: {}
    }
  },
  watch: {
    ctxInitialProperty: {
      handler () {
        initialCanvasProperty(this.context, this.ctxInitialProperty)
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters([
      'ctx',
      'context',
      'isMobile',
      'ctxInitialProperty',
      'devicePixelRatio'
    ])
  },
  methods: {
    ...mapMutations([
      'setCanvasInstance',
      'setCanvasContext'
    ]),
    init () {
      const { start, move, end } = adaptEvent(this.isMobile)
      const { left, top } = this.ctx.getBoundingClientRect()
      this.ctx.addEventListener(start, (e) => {
        e.preventDefault()
        this.isDrawing = true
        this.point.x = e.clientX - left
        this.point.y = e.clientY - top
        if (this.isDrawing) {
          this.context.beginPath()
          this.context.moveTo(this.point.x, this.point.y)
        }
      })
      this.ctx.addEventListener(move, (e) => {
        e.preventDefault()
        this.point.x = e.clientX - left
        this.point.y = e.clientY - top
        if (this.isDrawing) {
          this.context.lineTo(this.point.x, this.point.y)
          this.context.stroke()
        }
      })
      this.ctx.addEventListener(end, () => {
        this.isDrawing = false
      })
    }
  },
  mounted () {
    this.setCanvasInstance(this.$refs.whiteboard)
    this.setCanvasContext(this.ctx.getContext('2d'))
    adaptRetinaScreen(this.ctx, this.context, this.devicePixelRatio)
    initialCanvasProperty(this.context, this.ctxInitialProperty)
    this.init()
  }
}
</script>

<style lang="scss">
.whiteboard {
  width: 100%;
  height: calc(100% - 54px);
  cursor: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAElBMVEVHcEz29vY0NDT///9JSUmMjIwE7TzkAAAABnRSTlMAJJcLekY8Ss1wAAAAWUlEQVRYw+3SQQrAMAhE0ejo/a9cF4HS7mKgofDfJtmMGOMYAAD8hyzT1M9beAlr5ysrVZVuhYjnud6AvS6L0uf45NktoNlBnnmC7iHq0DduL9L+KgMA8LkLvxkA1Dm6Y8EAAAAASUVORK5CYII=") 32 32, auto;
}
</style>

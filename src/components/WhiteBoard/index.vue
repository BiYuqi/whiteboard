<template>
  <canvas class="whiteboard" ref="whiteboard"></canvas>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { initialCanvasProperty, adaptRetinaScreen, adaptEvent } from '../../utils/base'
import { eraser } from '../../utils/eraser'
import Normal from '../../utils/normal'
export default {
  data () {
    return {
      isDrawing: false,
      point: {},
      normal: null
    }
  },
  watch: {
    ctxInitialProperty: {
      handler (oldValue, newValue) {
        initialCanvasProperty(this.context, this.ctxInitialProperty)
        // 橡皮檫
        eraser({
          currentBrush: this.currentBrush,
          context: this.context,
          strokeStyle: this.strokeStyle,
          callback: () => {
            this.setGlobalCompositeOperation('source-over')
            this.setCurrentBrushColor(this.strokeStyle)
          }
        })
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters([
      'ctx',
      'context',
      'isMobile',
      'strokeStyle',
      'ctxInitialProperty',
      'devicePixelRatio',
      'currentBrush'
    ])
  },
  methods: {
    ...mapMutations([
      'setCanvasInstance',
      'setCanvasContext',
      'setCurrentBrushColor',
      'setGlobalCompositeOperation'
    ]),
    init () {
      this.normal = new Normal({
        ctx: this.ctx,
        context: this.context
      })
      const { start, move, end } = adaptEvent(this.isMobile)
      this.ctx.addEventListener(start, (e) => { this.normal.start(e) }, false)
      this.ctx.addEventListener(move, (e) => { this.normal.move(e) }, false)
      this.ctx.addEventListener(end, () => { this.normal.end() }, false)
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

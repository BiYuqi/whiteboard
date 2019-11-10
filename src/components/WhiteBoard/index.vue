<template>
  <canvas class="whiteboard" ref="whiteboard"></canvas>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { initialCanvasProperty } from '../../utils/initialCanvasProperty'
import { adaptRetinaScreen } from '../../utils/adaptRetinaScreen'
import { adaptEvent } from '../../utils/adaptEvent'
export default {
  computed: {
    ...mapState([
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
    detchScreenChange () {
      adaptRetinaScreen(this.ctx, this.context, this.devicePixelRatio)
    },
    init () {
      const { start, move, end } = adaptEvent(this.isMobile)
      this.ctx.addEventListener(start, (e) => {
        e.preventDefault()
        console.log('start')
      })
      this.ctx.addEventListener(move, (e) => {
        e.preventDefault()
        console.log('move')
      })
      this.ctx.addEventListener(end, () => {
        console.log('end')
      })
    }
  },
  mounted () {
    this.setCanvasInstance(this.$refs.whiteboard)
    this.setCanvasContext(this.ctx.getContext('2d'))
    initialCanvasProperty(this.context, this.ctxInitialProperty)
    adaptRetinaScreen(this.ctx, this.context, this.devicePixelRatio)
    window.addEventListener('resize', this.detchScreenChange)
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

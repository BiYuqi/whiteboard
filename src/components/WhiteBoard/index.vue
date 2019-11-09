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
}
</style>

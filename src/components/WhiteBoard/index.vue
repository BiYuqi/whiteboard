<template>
  <canvas class="whiteboard" ref="whiteboard"></canvas>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Whiteboard from '../../utils/draw'
export default {
  watch: {
    contextConfig: {
      handler (newValue, oldValue) {
        this.instance.init(this.contextConfig)
      },
      deep: true
    },
    currentBrush: {
      handler (newValue, oldValue) {
        console.log({ oldValue, newValue })
        if (newValue !== 'eraser') {
          this.instance.init(this.contextConfig)
        }
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters([
      'ctx',
      'context',
      'instance',
      'strokeStyle',
      'contextConfig',
      'currentBrush'
    ])
  },
  methods: {
    ...mapMutations([
      'setCanvasInstance',
      'setCanvasContext',
      'setInstance',
      'setCurrentBrushColor',
      'setGlobalCompositeOperation',
      'setCurrentSnapShot'
    ])
  },
  mounted () {
    this.setCanvasInstance(this.$refs.whiteboard)
    this.setCanvasContext(this.ctx.getContext('2d'))
    const whiteboard = new Whiteboard({
      ctx: this.ctx,
      context: this.context,
      config: this.contextConfig
    })
    this.setInstance(whiteboard)
    this.instance.resizeCanvas()
    this.instance.init(this.contextConfig)
    this.instance.bindEvent()
  },
  created () {
    window.onbeforeunload = function (event) {
      event.returnValue = false
      return false
    }
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

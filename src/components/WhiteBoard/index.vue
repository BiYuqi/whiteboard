<template>
  <canvas
    class="whiteboard"
    ref="whiteboard"
    :class="[dynamicBrush]"></canvas>
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
    ]),
    dynamicBrush () {
      return `whiteboard__${this.currentBrush}`
    }
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

  &__pencil {
    cursor: url(../../assets/cusor/circle.svg) 8 8, auto;
  }

  &__line {
    cursor: url(../../assets/cusor/crosshair.svg) 8 8, auto;
  }

  &__eraser {
    cursor: url(../../assets/cusor/eraser.svg) 8 8, auto;
  }
}
</style>

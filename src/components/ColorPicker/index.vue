<template>
  <div class="tool-box__color-picker-wrapper">
    <el-tooltip
      class="tool-box__item"
      effect="dark"
      content="Pencil Color"
      placement="top">
      <el-color-picker
        v-model="pencilColor"
        class="tool-box__color-picker"
        size="mini"
        @change="handleBrushColor"
        show-alpha
        :predefine="predefineColors">
      </el-color-picker>
    </el-tooltip>
    <el-tooltip
      class="tool-box__item"
      effect="dark"
      content="Canvas Color"
      placement="top">
      <el-color-picker
        v-model="canvasColor"
        class="tool-box__color-picker"
        size="mini"
        @change="handleCanvasColor"
        show-alpha
        :predefine="predefineColors">
      </el-color-picker>
    </el-tooltip>
    <el-popover
      class="tool-box__item"
      placement="top"
      width="260"
      trigger="hover">
      <div class="block">
        <span class="demonstration">Pencil Size</span>
        <el-slider v-model="pencilSize" @change="handleChange"></el-slider>
      </div>
      <svg-icon slot="reference" name="sizes" :styles="$store.state.svgInfo" />
    </el-popover>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      pencilColor: this.$store.state.contextConfig.strokeStyle,
      canvasColor: this.$store.state.currentCanvasColor,
      pencilSize: this.$store.state.contextConfig.lineWidth,
      predefineColors: [
        '#FF0000',
        '#FF7F00',
        '#FFFF00',
        '#00FF00',
        '#00FFFF',
        '#0000FF',
        '#8B00FF',
        '#ff4500',
        '#66CDAA',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        '#008B8B',
        '#006400',
        '#ffffff',
        '#000000'
      ]
    }
  },
  computed: {
    ...mapState([
      'ctx',
      'context'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentBrushColor',
      'setCurrentCanvasColor',
      'setCurrentBrushSize'
    ]),
    handleBrushColor (color) {
      this.setCurrentBrushColor(color)
    },
    handleCanvasColor (color) {
      this.context.fillStyle = color
      this.context.fillRect(0, 0, this.ctx.width, this.ctx.height)
      this.setCurrentCanvasColor(color)
    },
    handleChange (size) {
      this.setCurrentBrushSize(size)
    }
  }
}
</script>

<style lang="scss">
.tool-box {
  &__color-picker-wrapper {
    display: flex;
    align-items: center;
  }

  .el-input-number--small {
    width: 80px;
  }

  .el-color-picker--mini {
    height: 32px;
    .el-color-picker__trigger {
      width: 32px;
      height: 32px;
    }
  }

  &__color-picker {
    .el-color-picker__trigger {
      border-radius: 50%;
    }

    .el-color-picker__color {
      border: none;
      border-radius: 50%;
    }

    .el-color-picker__color-inner {
      border: 1px solid #eee;
      border-radius: 50%;
    }

    .el-color-picker__color.is-alpha {
      background-image:none;
    }

    .el-icon-arrow-down:before {
      position: absolute;
      left: 50px;
    }

  }
}
</style>

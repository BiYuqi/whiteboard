<template>
  <div class="tool-box__draw">
    <!-- <el-popover
      class="tool-box__item"
      placement="top"
      title="Select Brush"
      trigger="hover">
      <svg-icon slot="reference" name="brush-size" :styles="$store.state.svgInfo" />
    </el-popover>
    <div class="tool-box__split-part"></div> -->
    <el-tooltip
      class="tool-box__item"
      v-for="(item, index) in toolBox"
      :key="index"
      effect="dark"
      :content="item.tip"
      placement="top"
      :class="{active: $store.state.currentBrush === item.name}"
      @click.native="setBrush(item.name)">
      <svg-icon :name="item.name" :styles="$store.state.svgInfo" />
    </el-tooltip>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {
      toolBox: [
        {
          name: 'pencil',
          tip: 'Pencil'
        },
        {
          name: 'line',
          tip: 'Line'
        },
        {
          name: 'eraser',
          tip: 'Eraser'
        },
        {
          name: 'undo',
          tip: 'Undo'
        },
        {
          name: 'redo',
          tip: 'Redo'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'ctx',
      'context',
      'currentBrush',
      'strokeStyle',
      'instance'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentBrush',
      'setCurrentBrushColor',
      'setGlobalCompositeOperation'
    ]),
    setBrush (name) {
      if (!['undo', 'redo'].includes(name)) {
        this.setCurrentBrush(name)
      }

      if (name === 'undo') {
        this.instance.undo()
      }

      if (name === 'redo') {
        this.instance.redo()
      }

      if (name === 'eraser') {
        this.instance.eraser()
      }

      if (name === 'line') {
        this.instance.setLine(true)
      }

      if (name === 'pencil') {
        this.instance.setLine(false)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';
.tool-box {
  &__draw {
    display: flex;
    align-items: center;
  }
  &__item {
    cursor: pointer;
    color: $toolBoxColor;
    margin: 0 12px;

    &:hover {
      color: $activeToolBoxColor;
    }

    &.active {
      color: $activeToolBoxColor;
    }
  }
}
</style>

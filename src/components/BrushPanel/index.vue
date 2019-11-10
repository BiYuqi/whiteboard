<template>
  <div class="tool-box__draw">
    <el-popover
      class="tool-box__item"
      placement="top"
      title="Select Brush"
      trigger="hover">
      <brush-type />
      <svg-icon slot="reference" name="brush-size" :styles="$store.state.svgInfo" />
    </el-popover>
    <div class="tool-box__split-part"></div>
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
import { mapMutations, mapState } from 'vuex'
import BrushType from '../BrushType'
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
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'ctx'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentBrush'
    ]),
    setBrush (name) {
      if (!['undo', 'brush-size'].includes(name)) {
        this.setCurrentBrush(name)
      }
    }
  },
  components: {
    BrushType
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

<template>
  <div class="tool-box__draw">
    <template v-for="(item, index) in toolBox">
      <el-tooltip
        class="tool-box__item"
        :key="index"
        effect="dark"
        :content="item.tip"
        placement="top"
        :class="{active: $store.state.currentBrush === item.name}"
        @click.native="setBrush(item.name)">
        <svg-icon :name="item.name" :styles="$store.state.svgInfo" />
      </el-tooltip>
    </template>
    <el-dialog
      title="Set your pencil"
      :visible.sync="dialogVisible"
      :modal="false">
      <brush-size />
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleBrushSizeEvent">Ok</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import BrushSize from '../BrushSize'
export default {
  data () {
    return {
      toolBox: [
        {
          name: 'brush-size',
          tip: 'Pencil Size'
        },
        {
          name: 'pencil',
          tip: 'Pencil'
        },
        {
          name: 'line',
          tip: 'Line'
        },
        {
          name: 'undo',
          tip: 'Undo'
        },
        {
          name: 'eraser',
          tip: 'Eraser'
        }
      ],
      dialogVisible: false
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
      if (name === 'brush-size') {
        this.dialogVisible = true
      }
      this.setCurrentBrush(name)
    },
    handleBrushSizeEvent () {

    }
  },
  components: {
    BrushSize
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';
.tool-box {
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

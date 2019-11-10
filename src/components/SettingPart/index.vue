<template>
  <div class="tool-box__setting">
    <el-tooltip
      v-for="(tool, index) in toolBox"
      :key="index"
      class="tool-box__item"
      effect="dark"
      :content="tool.tip"
      placement="top">
      <svg-icon
        :name="tool.name"
        :styles="$store.state.svgInfo"
        @click.native="handleClick(tool.name)"/>
    </el-tooltip>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      toolBox: [
        {
          name: 'delete',
          tip: 'Clear Canvas'
        },
        {
          name: 'download',
          tip: 'Download as Image'
        }
        // {
        //   name: 'history',
        //   tip: 'History'
        // }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'ctx',
      'context'
    ])
  },
  methods: {
    handleClick (type) {
      if (type === 'delete') {
        this.context.clearRect(0, 0, this.ctx.width, this.ctx.height)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';
.tool-box {
  &__setting-container {
    position: absolute !important;
    left: 5px;
  }

  &__setting {
    cursor: pointer;
    color: $activeToolBoxColor;
  }
}
</style>

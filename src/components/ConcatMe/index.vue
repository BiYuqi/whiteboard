<template>
  <div class="tool-box__github">
    <el-tooltip
      v-for="(tool, index) in toolBox"
      :key="index"
      class="tool-box__item"
      effect="dark"
      :content="tool.tip"
      placement="top">
      <a href="https://github.com/BiYuqi/whiteboard" target="_blank">
        <svg-icon :name="tool.name" :styles="$store.state.svgInfo" />
      </a>
      <a href="https://github.com/BiYuqi/whiteboard/issues/new" target="_blank">
        <svg-icon :name="tool.name" :styles="$store.state.svgInfo" />
      </a>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toolBox: [
        {
          name: 'github',
          tip: 'Github'
        },
        {
          name: 'message',
          tip: 'Github Issue'
        }
      ]
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
  &__github {
    display: flex;

    a {
      display: block;
    }

    .tool-box__item {
      cursor: pointer;
      color: $activeToolBoxColor;
    }
  }
}
</style>

<template>
  <div class="tool-box__github">
    <el-tooltip
      v-for="(tool, index) in toolBox"
      :key="index"
      class="tool-box__item"
      effect="dark"
      :content="tool.tip"
      placement="top">
      <a :href="tool.link" target="_blank">
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
          tip: 'Github',
          link: 'https://github.com/BiYuqi/whiteboard'
        },
        {
          name: 'message',
          tip: 'Github Issue',
          link: 'https://github.com/BiYuqi/whiteboard/issues/new'
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

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
    <el-dropdown
      @command="handleDownload"
      placement="top"
      class="tool-box__item">
      <span>
        <svg-icon
          name="download"
          :styles="$store.state.svgInfo" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="image/png">PNG</el-dropdown-item>
        <el-dropdown-item command="image/jpeg">JPEG</el-dropdown-item>
        <el-dropdown-item command="image/webp">WebP</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      toolBox: [
        {
          name: 'delete',
          tip: 'Clear Canvas'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'ctx',
      'context',
      'instance'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentSnapShot'
    ]),
    handleClick (type) {
      this.setCurrentSnapShot({
        name: Date.now(),
        base64: this.instance.toDataURL(),
        imageData: this.instance.getImageData()
      })
      setTimeout(() => {
        this.instance.clear()
      }, 0)
    },
    handleDownload (type) {
      const a = document.createElement('a')
      a.download = 'whiteboard-' + Date.now()
      a.href = this.instance.toDataURL(type, 1)
      a.click()
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
  &__item {
    &.el-dropdown {
      color: $toolBoxColor;
    }
  }
}
</style>

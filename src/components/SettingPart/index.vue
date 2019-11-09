<template>
  <el-dropdown @command="handleCommand" class="tool-box__setting-container">
    <span class="tool-box__setting">
      <svg-icon name="setting" :styles="{fontSize: '24px'}"></svg-icon>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="JPG">
        <svg-icon
          name="history"
          :styles="$store.state.svgSettingInfo">
        </svg-icon> History
      </el-dropdown-item>
      <el-dropdown-item command="PNG">
        <svg-icon
          name="download"
          :styles="$store.state.svgSettingInfo">
        </svg-icon> Download
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'ctx'
    ])
  },
  methods: {
    handleCommand (command) {
      console.log('Click on ' + command)
      this.ctx.fillStyle = 'red'
      console.log(this.ctx)
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

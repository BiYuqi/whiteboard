<template>
  <div class="tool-box">
    <brush-panel />
    <color-picker />
    <setting-part />
  </div>
</template>

<script>
import BrushPanel from '../BrushPanel'
import ColorPicker from '../ColorPicker'
import SettingPart from '../SettingPart'
export default {
  components: {
    ColorPicker,
    BrushPanel,
    SettingPart
  }
}
</script>

<style lang="scss">
.tool-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  border-top: 2px dashed #d3d3d3;
  box-shadow: 0 10px 0 #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

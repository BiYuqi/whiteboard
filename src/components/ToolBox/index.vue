<template>
  <div class="tool-box">
    <div class="tool-box__inner">
      <brush-panel />
      <div class="tool-box__split-part"></div>
      <setting-part />
      <div class="tool-box__split-part"></div>
      <color-picker />
      <div class="tool-box__split-part"></div>
      <concat-me />
    </div>
  </div>
</template>

<script>
import BrushPanel from '../BrushPanel'
import ColorPicker from '../ColorPicker'
import SettingPart from '../SettingPart'
import ConcatMe from '../ConcatMe'
export default {
  components: {
    ColorPicker,
    BrushPanel,
    SettingPart,
    ConcatMe
  }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';

.tool-box {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  &__inner {
    // box-shadow: 0 0 2px 1px rgba(0, 0, 0, .1);
    border-top: 1px solid $lineColor;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
  }

  &__split-part {
    width: 1px;
    height: 18px;
    background-color: $lineColor;
  }
}
</style>

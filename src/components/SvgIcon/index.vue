<template>
  <svg class="icon" :class="iconClass" :style="styles">
    <use :xlink:href="'#'+Icons[name].default.id"></use>
  </svg>
</template>

<script>
import Icons from '@/assets/icons'
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    styles: {
      type: Object
    }
  },
  data () {
    return {
      Icons: Icons,
      iconClass: 'icon-' + this.name
    }
  }
}
</script>
<style lang="scss">
.icon{
  width: 1em;
  height: 1em;
  vertical-align: sub;
  fill: currentColor;
  overflow: hidden;
}
</style>

<template>
  <div class="whiteboard-main">
    <tool-box />
    <router-view />
  </div>
</template>

<script>
import ToolBox from '../components/ToolBox'
export default {
  components: {
    ToolBox
  }
}
</script>

<style lang="scss">
.whiteboard-main {
  height: 100%;
}
</style>

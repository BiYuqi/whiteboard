<template>
  <el-color-picker
    v-model="color"
    class="tool-box__color-picker"
    size="small"
    @change="handleBrushColor"
    show-alpha>
  </el-color-picker>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      color: this.$store.state.currentBrushColor
    }
  },
  methods: {
    ...mapMutations([
      'setCurrentBrushColor'
    ]),
    handleBrushColor (color) {
      this.setCurrentBrushColor(color)
    }
  }
}
</script>

<style lang="scss">
.tool-box {
  &__color-picker {
    margin-left: 40px;

    .el-color-picker__color {
      border: none;
    }

    .el-color-picker__color-inner {
      border-radius: 50%;
    }

    .el-color-picker__trigger {
      border-radius: 50%;
    }

    .el-color-picker__color.is-alpha {
      background-image:none;
    }

    .el-color-picker__icon {
      display: none;
    }
  }
}
</style>

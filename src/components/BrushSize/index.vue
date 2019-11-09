<template>
  <el-slider v-model="value" @change="sliderChange"></el-slider>
</template>

<script>
export default {
  data () {
    return {
      value: 14
    }
  },
  methods: {
    sliderChange (value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>

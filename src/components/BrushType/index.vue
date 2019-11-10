<template>
  <ul class="brush-type">
    <li
      v-for="(item, index) in types"
      class="brush-type__item"
      :key="index">
      {{item.name}}
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      types: [
        {
          name: '',
          tip: ''
        },
        {
          name: '',
          tip: ''
        },
        {
          name: '',
          tip: ''
        },
        {
          name: '',
          tip: ''
        },
        {
          name: '',
          tip: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.brush-type {
  display: flex;
  list-style: none;
  flex-wrap: wrap;

  &__item {
    width: 36px;
    height: 36px;
    border: 1px solid #eee;
    cursor: pointer;
    margin: 0 6px 4px 0;
  }
}
</style>

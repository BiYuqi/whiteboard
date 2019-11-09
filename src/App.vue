<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
}
</script>>
<style lang="scss">
@import './styles/common.scss';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
}

body {
  font-size: 14px;
  line-height: 1.5;
  color: $baseColor;
  font-family: Graphik,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
}

#app {
  width: 100%;
  height: 100%;
}
</style>

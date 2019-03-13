<template>
  <div id="rino-app">
      <slot/>
  </div>
</template>

<script>
import "./styles/reset.scss";

export default {};
</script>

<style lang="scss">
#rino-app {
  position: relative;
  height: 100%;
  & > div {
    display: flex;
  }
}
</style>

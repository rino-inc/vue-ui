<template>
  <div id="titlebar">
    <div class="logo">
      <img src="Fonts.png" alt>
    </div>
    <div class="content">
      <div class="app-name">RINO {{app}}</div>
      <div id="center"></div>
      <div id="right"></div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        app: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss">
#titlebar {
    display: flex;
  position: relative;
  height: 50px;
  width: 100%;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.35);
  z-index: 100;
  background-color: white;
  & > div {
    display: inline-block;
    height: 100%;
  }
  & > .content {
    display: inline-flex;
    height: 100%;
    width: calc(100% - 50px);
    align-items: center;
    padding-left: 10px;
  }

  .app-name {
    font-family: "Podkova VF Beta";
    font-size: 20px;
  }

  & > .logo {
    width: 50px;
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>

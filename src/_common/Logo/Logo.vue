<template>
  <div class="Logo">
    <div
      class="LogoImg"
      :class="[{}, variation]"
      :style="{
        width: size + 'px'
      }" />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 100,
    },
    variation: {
      type: String,
      default: 'full',
    },
  },
};
</script>

<style scoped lang="scss">
.LogoImg {
  padding-bottom: 80%;
  background-repeat: no-repeat;
  background-image: url('./Logo.svg');
  background-size: contain;

  &.compact {
    padding-bottom: 0;
    height: 40px;
    background-size: 100px;
    background-position-y: -50px;
    overflow: hidden;
  }
}
</style>

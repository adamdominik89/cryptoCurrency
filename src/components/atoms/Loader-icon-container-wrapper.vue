<template>
  <div :class="classFeature">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'LoaderIconContainerWrapper',
  props: {
    classFeature: {
      type: String,
      default: 'loader-icon-container'
    }
  }
}
</script>

<style scoped>
.loader-icon-container {
  margin: 150px auto 0 auto;
  width: 100%;
}
</style>

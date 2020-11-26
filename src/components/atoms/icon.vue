<template>
  <i :class="`material-icons${classFeature ? ' ' + classFeature : ''}`">{{ iconName }}</i>
</template>

<script>
import 'material-design-icons/iconfont/material-icons.css';

export default {
  name: 'Icon',
  props: {
    iconName: {type: String, required: true},
    classFeature: {type: String, required: false}
  }
}
</script>

<style scoped>

.dollar-sign {
  color: gold;
  font-size: 35px;
}
.burger-icon {
  color: white;
}

</style>

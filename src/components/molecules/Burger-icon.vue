<template>
  <div
      class="drawer-toggle"
      @click="$emit('toggle')">
    <Icon
        icon-name="menu"
        class-feature="burger-icon"
    />
  </div>
</template>


<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle {
  width: 90%;
  height: 2px;
  background-color: white;
}
</style>

<script>
import Icon from "@/components/atoms/icon";

export default {
  components: {Icon}
}
</script>

<template>
  <div>
    <TheHeader/>
    <slot />
  </div>
</template>
<script>

import TheHeader from "@/components/organisms/The-header";
export default {
  name: 'DefaultTemplate',
  components: {
    TheHeader
  },
}

</script>


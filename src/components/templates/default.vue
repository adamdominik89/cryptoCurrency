<template>
  <div>
    <TheHeader/>
    <TheSideNav
        :show="getIsMenuOpen"
        @close="handleToggle"
    />
    <div class="content-wrapper">
      <slot/>
    </div>
  </div>
</template>
<script>

import TheHeader from "@/components/organisms/The-header";
import TheSideNav from '@/components/organisms/The-side-nav'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'DefaultTemplate',
  components: {
    TheHeader,
    TheSideNav
  },
  computed: {
    ...mapGetters('UserInteraction', ['getIsMenuOpen']),
  },
  methods: {
    ...mapMutations('UserInteraction', ['setIsMenuOpen']),
    handleToggle() {
      this.setIsMenuOpen(false)
    }
  }
}

</script>

<style>
.content-wrapper {
  margin-top: 60px;
}
</style>

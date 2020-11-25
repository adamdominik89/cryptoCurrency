<template>
  <div>
    <TheHeader/>
    <TheSideNav
        :show="getIsMenuOpen"
        @close="handleToggle"
    />
    <slot/>
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
    ...mapGetters('Menu', ['getIsMenuOpen']),
  },
  methods: {
    ...mapMutations('Menu', ['setIsMenuOpen']),
    handleToggle() {
      this.setIsMenuOpen(false)
    }
  }
}

</script>


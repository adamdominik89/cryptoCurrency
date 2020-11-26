<template>
  <div>
    <TheHeader/>
    <TheSideNav
        :show="getIsMenuOpen"
        @close="handleToggle"
    />
    <section class="content-wrapper">
      <slot/>
    </section>
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
.content-wrapper{
  padding-top: 20px;
}
</style>

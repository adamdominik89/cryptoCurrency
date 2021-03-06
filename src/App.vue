<template>
  <div id="app">
    <DefaultTemplate>
      <router-view/>
    </DefaultTemplate>
  </div>
</template>

<script>

import {getRequest} from "@/common/GetRequest";
import {mapGetters, mapMutations} from 'vuex'
import DefaultTemplate from "@/components/templates/default";

export default {
  name: 'App',
  components: {DefaultTemplate},
  data: () => ({
    previousWidth: null
  }),
  mounted() {
    this.setIsDataLoaded(false)
    this.fetchData('https://rest.coinapi.io/v1/exchanges')
        .then((result) => {
          this.setCryptoData(result)
        })
        .then(() => this.fetchData('https://rest.coinapi.io/v1/assets'))
        .then((result) => this.setCryptoAssets(result))
        .catch((error) => {
          console.error(error)
        })
    .finally(() => {
      this.setIsDataLoaded(true)
    })
    window.addEventListener('resize', this.handleMenuState);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleMenuState);
  },
  computed: {
    ...mapGetters('UserInteraction', [
      'getIsMenuOpen'
    ])
  },
  methods: {
    ...mapMutations('CryptoData', ['setCryptoData', 'setCryptoAssets']),
    ...mapMutations('UserInteraction', ['setIsMenuOpen', 'setIsDataLoaded']),
    fetchData: async (url) => {
      return getRequest(url)
    },
    handleMenuState(value) {
      const actualScreenWidth = value.target.innerWidth;
      const mediumDevicesSize = 768;
      if (this.previousWidth < actualScreenWidth && actualScreenWidth >= mediumDevicesSize && this.getIsMenuOpen) {
        this.setIsMenuOpen(false)
      }
      this.previousWidth = value.target.innerWidth;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>

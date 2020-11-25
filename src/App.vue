<template>
  <div id="app">
    <div>
      Header with menu
    </div>
    <router-view/>
  </div>
</template>

<script>

import {getRequest} from "@/common/GetRequest";
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  mounted() {
    this.fetchData('https://rest.coinapi.io/v1/exchanges')
        .then((result) => {
          this.setCryptoData(result)
        })
        .then(() => this.fetchData('https://rest.coinapi.io/v1/assets'))
        .then((result) => this.setCryptoAssets(result))
        .catch((error) => {
          console.error(error)
        })
  },
  computed: {},
  methods: {
    ...mapMutations('CryptoData', ['setCryptoData', 'setCryptoAssets']),
    fetchData: async (url) => {
      return getRequest(url)
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
</style>

<template>
  <div id="app">
    <DefaultTemplate>
      <router-view/>
    </DefaultTemplate>
  </div>
</template>

<script>

import {getRequest} from "@/common/GetRequest";
import {mapMutations} from 'vuex'
import DefaultTemplate from "@/components/templates/default";

export default {
  name: 'App',
  components: {DefaultTemplate},
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
body {
  margin: 0;
}
</style>

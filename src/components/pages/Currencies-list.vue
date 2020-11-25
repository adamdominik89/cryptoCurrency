<template>
  <div>
    <div v-for="crypto in getDataToDisplay"
         :key="crypto.id">
      {{ crypto.name }}
    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CurrenciesList',
  computed: {
    ...mapGetters('CryptoData', ['getCryptoAssets']),
    getDataToDisplay() {
      return this.getCryptoAssets.filter(singleCurrency => singleCurrency.type_is_crypto === 1)
          .map(cryptoCurrency => ({
            name: cryptoCurrency.name,
            id: cryptoCurrency.asset_id
          }))
    },
  }
}

</script>

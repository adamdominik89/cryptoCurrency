<template>
  <div>
      <CryptoCard v-for="cryptoCard in getDataToDisplay"
                  :key="cryptoCard.id"
                  :title="cryptoCard.name"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CryptoCard from "@/components/molecules/Crypto-card";

export default {
  name: 'CurrenciesList',
  components: {CryptoCard},
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

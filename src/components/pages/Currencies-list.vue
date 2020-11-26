<template>
  <div>
    <div v-if="!getIsDataLoaded">
      <CustomisedLoaderIcon :is-visible="!getIsDataLoaded"/>
    </div>
    <div v-else
         class="crypto-card-container">
      <CryptoCard v-for="cryptoCard in getDataToDisplay"
                  :key="cryptoCard.id"
                  :title="cryptoCard.name"
                  :id="cryptoCard.id"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CryptoCard from "@/components/molecules/Crypto-card";
import CustomisedLoaderIcon from "@/components/molecules/Customised-loader-icon";

export default {
  name: 'CurrenciesList',
  components: {
    CustomisedLoaderIcon,
    CryptoCard,
  },
  computed: {
    ...mapGetters('CryptoData', ['getCryptoAssets']),
    ...mapGetters('UserInteraction', ['getIsDataLoaded']),
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

<style>

.crypto-card-container {
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .crypto-card-container {
    justify-content: center;
  }
}
</style>

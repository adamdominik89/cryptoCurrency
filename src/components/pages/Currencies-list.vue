<template>
  <div>
    <template v-if="!getIsDataLoaded">
      <div class="loader-icon">
        <ClipLoader
            :loading="true"
            :color="'#e01010'"
            :size="'80px'"
        />
      </div>
    </template>
    <template v-else>
      <CryptoCard v-for="cryptoCard in getDataToDisplay"
                  :key="cryptoCard.id"
                  :title="cryptoCard.name"
                  :id="cryptoCard.id"/>
    </template>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CryptoCard from "@/components/molecules/Crypto-card";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'CurrenciesList',
  components: {
    CryptoCard,
    ClipLoader
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
.loader-icon {
  margin: 150px auto 0 auto;
  width: 100%;
}
</style>

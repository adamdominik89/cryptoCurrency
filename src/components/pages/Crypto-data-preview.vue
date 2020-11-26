<template>
  <div>
    <div v-if="!getIsDataLoaded">
      <div class="loader-icon">
        <ClipLoader
            :loading="true"
            :color="'#e01010'"
            :size="'80px'"
        />
      </div>
    </div>
    <div v-else>
      <div v-show="errorHasOccured">
        <div>
          Fetching data failed please refresh the page or check your URL
        </div>
      </div>
      <div v-show="!errorHasOccured">
        <div class="header-data-preview">
          <div class="crypto-name">
            <h1>
              {{ getData }}
            </h1>
          </div>
          <img :src="getUrlForIcon"/>
        </div>
        <div v-for="(singleData, index) in getSingleCryptoData"
             :key="index"
             class="single-crypto-rate-preview"
        >
          <RateDataCard :rate-data="singleData"/>
        </div>
        <HistoricalData/>
        <div class="go-to-main-page">
          <router-link to="/">Go to all Crypto preview</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import HistoricalData from "@/components/organisms/Historical-data";
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import RateDataCard from "@/components/molecules/Rate-data-card";

export default {
  name: 'CryptoDataPreview',
  components: {RateDataCard, HistoricalData, ClipLoader},
  data: () => ({
    errorHasOccured: false
  }),
  mounted() {
    this.setIsDataLoaded(false)
    if (this.getCryptoIcons.length === 0) {
      this.fetchCryptoData({
        url1: `https://rest.coinapi.io/v1/exchangerate/${this.getId}`,
        url2: `https://rest.coinapi.io/v1/assets/icons/32`,
        url3: `https://rest.coinapi.io/v1/ohlcv/${this.getId}/USD/latest?period_id=1DAY`
      })
          .catch((error) => {
            console.error(error)
            this.errorHasOccured = true
            this.setIsDataLoaded(true)
          })
    } else {
      this.fetchExchangeRateAndHistoricalData({
            url1: `https://rest.coinapi.io/v1/exchangerate/${this.getId}`,
            url2: `https://rest.coinapi.io/v1/ohlcv/${this.getId}/USD/latest?period_id=1DAY`
          }
      )
          .catch((error) => {
            console.error(error)
            this.errorHasOccured = true
            this.setIsDataLoaded(true)
          })
    }
    this.errorHasOccured = false
    this.setIsDataLoaded(true)

  },
  computed: {
    ...mapGetters('CryptoData', ['getSingleCryptoData', 'getNameById', 'getCryptoIcons']),
    ...mapGetters('UserInteraction', ['getIsDataLoaded']),
    getData() {
      const result = this.getNameById(this.getId)
      return result && result.name ? result.name : ''
    },
    getId() {
      return this.$route.params.id
    },
    getUrlForIcon() {
      const result = this.getCryptoIcons.find(element => this.$route.params.id === element.asset_id)
      return result && result.url ? result.url : ''
    }
  },
  methods: {
    ...mapMutations('UserInteraction', ['setIsDataLoaded']),
    ...mapActions('CryptoData', ['fetchCryptoData', 'fetchExchangeRateAndHistoricalData'])
  }
}

</script>

<style>
.single-crypto-rate-preview {
  border-top: 1px solid lightgray;
  width: 400px;
  margin: 10px auto 0;
}

.go-to-main-page {
  margin: 20px
}

.crypto-name {
  font-weight: bold;
}

.header-data-preview {
  margin-top: 20px;
}
</style>

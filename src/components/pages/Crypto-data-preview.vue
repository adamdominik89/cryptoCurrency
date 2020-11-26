<template>
  <div>
    <div v-if="!getIsDataLoaded">
      <CustomisedLoaderIcon :is-visible="!getIsDataLoaded"/>
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
          <router-link to="/">Go to Main Page</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import HistoricalData from "@/components/organisms/Historical-data";
import RateDataCard from "@/components/molecules/Rate-data-card";
import store from '../../store/index'
import CustomisedLoaderIcon from "@/components/molecules/Customised-loader-icon";

export default {
  name: 'CryptoDataPreview',
  components: {
    CustomisedLoaderIcon,
    RateDataCard,
    HistoricalData
  },
  data: () => ({
    errorHasOccured: false
  }),
  beforeCreate() {
    store.commit('UserInteraction/setIsDataLoaded', false)
  },
  created() {
    const urls = {
      exchangeRates: `https://rest.coinapi.io/v1/exchangerate/${this.getId}`,
      historicalValues: `https://rest.coinapi.io/v1/ohlcv/${this.getId}/USD/latest?period_id=1DAY`,
      icons: `https://rest.coinapi.io/v1/assets/icons/32`,
    }
    if (this.getCryptoIcons.length === 0) {
      this.fetchCryptoData({
        url1: urls.exchangeRates,
        url2: urls.historicalValues,
        url3: urls.icons
      })
          .catch((error) => {
            this.onErrorHandle(error)
          })
          .finally(() => {
            this.setIsDataLoaded(true)
          })
    } else {
      this.fetchExchangeRateAndHistoricalData({
            url1: urls.exchangeRates,
            url2: urls.historicalValues
          }
      )
          .catch((error) => {
            this.onErrorHandle(error)
          })
          .finally(() => {
            this.setIsDataLoaded(true)
          })
    }
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
    ...mapActions('CryptoData', ['fetchCryptoData', 'fetchExchangeRateAndHistoricalData']),
    onErrorHandle(error) {
      console.error(error)
      this.errorHasOccured = true
      this.setIsDataLoaded(true)
    }
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

<template>
  <div>
    <div class="header-data-preview">
      <div class="crypto-name">
        <h1>
          {{ getData }}
        </h1>
      </div>
      <img :src="getUrlForIcon"/>
    </div>
    <div v-for="(singleData, index) in getSingleCryptoData" :key="index" class="single-crypto-rate-preview">
      <div>Actual rate in {{ singleData.asset_id_quote }}</div>
      <div>Rate value {{ singleData.rate }}</div>
      <div>Date when rate was set {{ singleData.time | formatDate }}</div>
    </div>
    <HistoricalData/>
    <div class="go-to-main-page">
      <router-link to="/">Go to all Crypto preview</router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import HistoricalData from "@/components/organisms/Historical-data";
import {months} from "@/macros/months";

export default {
  name: 'CryptoDataPreview',
  components: {HistoricalData},
  mounted() {
    if (this.getCryptoIcons.length === 0) {
      this.fetchCryptoData({
        url1: `https://rest.coinapi.io/v1/exchangerate/${this.getId}`,
        url2: `https://rest.coinapi.io/v1/assets/icons/32`,
        url3: `https://rest.coinapi.io/v1/ohlcv/${this.getId}/USD/latest?period_id=1DAY`
      })
          .catch((error) => {
            console.error(error)
          })
    }
    //here we need to fetch data
  },
  computed: {
    ...mapGetters('CryptoData', ['getSingleCryptoData', 'getNameById', 'getCryptoIcons']),
    getData() {
      let result = this.getNameById(this.getId)
      return result && result.name ? result.name : ''
    },
    getId() {
      return this.$route.params.id
    },
    getUrlForIcon() {
      let result = this.getCryptoIcons.find(element => this.$route.params.id === element.asset_id)
      return result && result.url ? result.url : ''
    }
  },
  filters: {
    formatDate(inputDate) {
      const date = new Date(inputDate);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const formattedDate = day + ". " + months[month] + " " + year;
      return formattedDate;
    }
  },
  methods: {
    ...mapActions('CryptoData', ['fetchCryptoData'])
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

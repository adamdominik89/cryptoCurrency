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
import {mapGetters} from 'vuex'
import HistoricalData from "@/components/organisms/Historical-data";

export default {
  name: 'CryptoDataPreview',
  components: {HistoricalData},
  computed: {
    ...mapGetters('CryptoData', ['getSingleCryptoData', 'getNameById', 'getCryptoIcons']),
    getData() {
      let result = this.getNameById(this.$route.params.id)
      return result && result.name ? result.name : ''
    },
    getUrlForIcon() {
      let result = this.getCryptoIcons.find(element => this.$route.params.id === element.asset_id)
      console.log(result)
      return result && result.url ? result.url : ''
    }
  },
  filters: {
    formatDate(inputDate) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const date = new Date(inputDate);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const formattedDate = day + ". " + months[month] + " " + year;
      return formattedDate;
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

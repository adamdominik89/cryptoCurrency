<template>
  <div>
    <div class="header-data-preview">
      Preview for
      <div class="crypto-name">
        {{ getData }}
      </div>
    </div>
    <div v-for="(singleData, index) in getSingleCryptoData" :key="index" class="single-crypto-rate-preview">
      <div>Actual rate in {{ singleData.asset_id_quote }}</div>
      <div>Rate value {{ singleData.rate }}</div>
      <div>Date when rate was set {{ singleData.time | formatDate }}</div>
    </div>
    <div class="go-to-main-page">
      <router-link to="/">Go to all Crypto preview</router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'CryptoDataPreview',
  computed: {
    ...mapGetters('CryptoData', ['getSingleCryptoData', 'getNameById']),
    getData() {
      let result = this.getNameById(this.$route.params.id)
      return result && result.name ? result.name : ''
    },
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

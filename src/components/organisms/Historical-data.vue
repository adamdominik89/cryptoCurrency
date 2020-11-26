<template>
  <div class="historical-data-container">
    <h3>History data:</h3>
    <div v-for="(data, index) in filteredData" :key="index" class="single-history-data-element">
      <HistoricalDataCard :data="data"/>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import HistoricalDataCard from "@/components/molecules/Historical-data-card";

export default {
  name: 'HistoricalData',
  components: {HistoricalDataCard},
  computed: {
    ...mapGetters('CryptoData', ['getCryptoHistoricalData']),
    filteredData() {
      return this.getCryptoHistoricalData.map(historicalData => {
        return {
          priceClose: historicalData.price_close,
          priceOpen: historicalData.price_open,
          timeOpen: historicalData.time_open,
          timeClose: historicalData.time_close,
          trades: historicalData.trades_count
        }
      })
    }
  },

}
</script>
<style>
.historical-data-container {
  border: 1px solid red;
  width: 350px;
  margin: 20px auto 10px auto;
}

@media (min-width: 768px) {
  .historical-data-container {
    width: 400px;
  }
}

.single-history-data-element {
  margin: 5px;
  border-top: 1px solid lightgray;
}
</style>

<template>
  <div class="historical-data-container">
    <h3>History data:</h3>
    <div v-for="(data, index) in filteredData" :key="index" class="single-history-data-element">
      <p> Time of first trade: {{data.timeOpen | formatDateAndTime}}</p>
      <p> Time of last trade: {{data.timeClose | formatDateAndTime}}</p>
      <p> Price for opening [USD]: {{data.priceOpen}}</p>
      <p> Price for closing [USD]: {{data.priceClose}}</p>
      <p> How many trades in time period?: {{data.trades}}</p>
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
import {months} from "@/macros/months";
import moment from 'moment';

export default {
  name: 'HistoricalData',
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
  filters: {
    formatDateAndTime(inputDate) {
      const date = new Date(inputDate);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const momentDate = moment(inputDate);
      const time = momentDate.format('HH:mm')
      const formattedDate = day + ". " + months[month] + " " + year + ' | ' + time;
      return formattedDate;
    }
  }
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

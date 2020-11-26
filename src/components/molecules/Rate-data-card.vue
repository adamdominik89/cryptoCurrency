<template>
  <div>
    <div>Actual rate in {{ rateData.asset_id_quote }}</div>
    <div>Rate value {{ rateData.rate }}</div>
    <div>Date when rate was set {{ rateData.time | formatDate }}</div>
  </div>
</template>

<script>
import {months} from "@/macros/months";

export default {
  name: 'RateDataCard',
  props: {
    rateData: {type: Object, required: true}
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
}
</script>

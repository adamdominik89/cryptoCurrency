<template>
  <div>
    <div>Actual rate in {{ rateData.asset_id_quote }}</div>
    <div>Rate value {{ rateData.rate }}</div>
    <div>Date when rate was set {{ rateData.time | formatDate }}</div>
  </div>
</template>

<script>
import {getDate} from "@/common/filters/date";

export default {
  name: 'RateDataCard',
  props: {
    rateData: {type: Object, required: true}
  },
  filters: {
    formatDate(inputDate) {
      return getDate(inputDate);
    }
  },
}
</script>

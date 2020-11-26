<template>
  <div>
    <p> Time of first trade: {{ data.timeOpen | formatDateAndTime }}</p>
    <p> Time of last trade: {{ data.timeClose | formatDateAndTime }}</p>
    <p> Price for opening [USD]: {{ data.priceOpen }}</p>
    <p> Price for closing [USD]: {{ data.priceClose }}</p>
    <p> How many trades in time period?: {{ data.trades }}</p>
  </div>
</template>

<script>
import moment from "moment";
import {months} from "@/macros/months";

export default {
  name: 'HistoricalDataCard',
  props: {
    data: {type: Object, required: true}
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

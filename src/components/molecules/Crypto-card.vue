<template>
  <div class="crypto-preview" @click="HandleCryptoClick">
    <div>
      <div class="crypto-content">
        <h1>Crypto currency name: {{ title }}</h1>
        <p>Click me to get more information!</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'CryptoCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions('CryptoData', ['fetchCryptoData']),
    HandleCryptoClick() {
            this.$router.push({path: `/cryptoPreview/${this.id}`})
    }
  }
}

</script>

<style scoped>

.crypto-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 80%;
  display: flex;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
}

.crypto-preview:hover {
  background-color: #ccc;
  color: red;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .crypto-preview {
    width: 400px;
    height: 225px;
    margin: 10px;
  }
}

.crypto-content {
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

</style>

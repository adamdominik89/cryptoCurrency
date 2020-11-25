<template>
  <div class="crypto-preview">
    <router-link :to="postLink">
      <div>
        <div class="crypto-content">
          <h1>Crypto currency name: {{ title }}</h1>
          <p>Additional data</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CryptoCard',
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  computed: {
    postLink() {
      return '/'
    },

  }
}
</script>

<style scoped>

.crypto-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 80%;
  display: inline-block;
  margin-top: 10px;
}
.crypto-preview:hover {
  background-color: #ccc;
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
}

</style>

<template>
  <li :class="classFeature">
    <router-link :to="{name: 'CurrenciesList'}">Main Page</router-link>
  </li>
</template>

<script>
export default {
  name: 'NavLinks',
  props: {
    classFeature: {type: String, default: 'nav-item'}
  }
}

</script>
<style scoped>
.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
}

.nav-item a:hover,
.nav-item a:active {
  color: red;
}

.header-nav-item {
  margin: 0 10px;
}

.header-nav-item a {
  text-decoration: none;
  color: white;
}

.header-nav-item a:hover {
  color: #ff0000;
}

a.router-link-exact-active {
  color: red;
}


</style>

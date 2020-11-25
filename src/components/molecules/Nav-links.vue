<template>
  <div>
    <li v-for="(link, index) in getAllNavLinks" :key="index"
        :class="classFeature">
      <router-link
          :to="{name: link.name}">{{ link.label }}
      </router-link>
    </li>
  </div>
</template>

<script>
import {routes} from "@/router";

export default {
  name: 'NavLinks',
  computed: {
    getAllNavLinks() {
      return routes.filter(route => route.path !== '*' && route.path !== '/cryptoPreview/:id')
          .map(filteredRoute => ({
                name: filteredRoute.name,
                label: filteredRoute.label
              })
          )
    }
  },
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
  display: inline-block;
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

<template>
  <div class="header-container">
    <header class="the-header">
      <BurgerIcon @toggle="handleToggle"/>
      <div class="logo">
        <router-link :to="{name: 'CurrenciesList'}">Crypto Currency App</router-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <NavLinks :classFeature="'header-nav-item'"/>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import BurgerIcon from '../atoms/Burger-icon'
import {mapGetters, mapMutations} from 'vuex';
import NavLinks from "@/components/molecules/Nav-links";

export default {
  name: 'TheHeader',
  components: {
    NavLinks,
    BurgerIcon
  },
  computed: {
    ...mapGetters('Menu', ['getIsMenuOpen'])
  },
  methods: {
    ...mapMutations('Menu', ['setIsMenuOpen']),
    handleToggle() {
      this.setIsMenuOpen(!this.getIsMenuOpen)
    }
  }

};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

</style>

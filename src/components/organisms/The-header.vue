<template>
  <div class="header-container">
    <div class="the-header">
      <BurgerIcon @toggle="handleToggle"/>
      <div class="logo">
        <Icon icon-name="attach_money" class-feature="dollar-sign"/>
        <router-link :to="{name: 'CurrenciesList'}">Crypto Currency App</router-link>
        <Icon icon-name="attach_money" class-feature="dollar-sign"/>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <NavLinks :classFeature="'header-nav-item'"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BurgerIcon from '../molecules/Burger-icon'
import {mapGetters, mapMutations} from 'vuex';
import NavLinks from "@/components/molecules/Nav-links";
import Icon from "@/components/atoms/icon";

export default {
  name: 'TheHeader',
  components: {
    Icon,
    NavLinks,
    BurgerIcon
  },
  computed: {
    ...mapGetters('UserInteraction', ['getIsMenuOpen'])
  },
  methods: {
    ...mapMutations('UserInteraction', ['setIsMenuOpen']),
    handleToggle() {
      this.setIsMenuOpen(!this.getIsMenuOpen)
    }
  }

};
</script>


<style scoped>
.header-container {
  height: 80px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
  -webkit-backface-visibility: hidden;
}

.logo {
  display: flex;
  align-items: center;
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

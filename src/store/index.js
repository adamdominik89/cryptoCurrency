import Vue from 'vue'
import Vuex from 'vuex'

import CryptoData from './modules/Crypto-data'
import Menu from './modules/Menu'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        CryptoData,
        Menu
        // namespace in store
    }
})

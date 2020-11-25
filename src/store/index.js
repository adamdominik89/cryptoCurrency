import Vue from 'vue'
import Vuex from 'vuex'
import CryptoData from './modules/Crypto-data'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        CryptoData
        // namespace in store
    }
})

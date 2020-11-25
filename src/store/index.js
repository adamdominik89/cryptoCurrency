import Vue from 'vue'
import Vuex from 'vuex'

import CryptoData from './modules/Crypto-data'
import UserInteraction from './modules/User-interaction'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        CryptoData,
        UserInteraction
        // namespace in store
    }
})

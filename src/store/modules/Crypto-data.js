export default {
    namespaced: true,
    state: {
        cryptoExchangesData: [],
        cryptoAssetsData: [],
    },
    getters: {
        getCryptoData: (state) => state.cryptoExchangesData,
        getCryptoAssets: (state) => state.cryptoAssetsData
    },
    mutations: {
        setCryptoData: (state, data) => {
            state.cryptoExchangesData = data;
        },
        setCryptoAssets: (state, data) => {
            state.cryptoAssetsData = data
        }
    },
    actions: {}
}

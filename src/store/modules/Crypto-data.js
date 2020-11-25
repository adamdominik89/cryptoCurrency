import {getRequest} from "@/common/GetRequest";

export default {
    namespaced: true,
    state: {
        cryptoExchangesData: [],
        cryptoAssetsData: [],
        singleCryptoData: {}
    },
    getters: {
        getCryptoData: (state) => state.cryptoExchangesData,
        getCryptoAssets: (state) => state.cryptoAssetsData,
        getSingleCryptoData: (state) => state.singleCryptoData,
        getNameById: (state) => (id) => state.cryptoAssetsData.find(element => element.asset_id === id)
    },
    mutations: {
        setCryptoData: (state, data) => {
            state.cryptoExchangesData = data;
        },
        setCryptoAssets: (state, data) => {
            state.cryptoAssetsData = data
        },
        setSingleCryptoData: (state, data) => {
            state.singleCryptoData = data
        }
    },
    actions: {
        fetchSingleCryptoData: ({commit}, url) => {
            return getRequest(url)
                .then((result) => {
                    const value = result.rates.filter(element => element.asset_id_quote === 'USD' || element.asset_id_quote === 'EUR')
                    // TODO: here we need to get most popular currencies
                    commit('setSingleCryptoData', value)
                    return value
                })
        }
    }
}

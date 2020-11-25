import {getRequest} from "@/common/GetRequest";

export default {
    namespaced: true,
    state: {
        cryptoExchangesData: [],
        cryptoAssetsData: [],
        cryptoIcons: [],
        cryptoHistoricalData: [],
        singleCryptoData: {}
    },
    getters: {
        getCryptoData: (state) => state.cryptoExchangesData,
        getCryptoAssets: (state) => state.cryptoAssetsData,
        getSingleCryptoData: (state) => state.singleCryptoData,
        getCryptoIcons: (state) => state.cryptoIcons,
        getCryptoHistoricalData: (state) => state.cryptoHistoricalData,
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
        },
        setCryptoIcons: (state, data) => {
            state.cryptoIcons = data
        },
        setHistoricalData: (state, data) => {
            state.cryptoHistoricalData = data
        }
    },
    actions: {
        fetchCryptoData: ({commit}, {url1, url2, url3}) => {
            return getRequest(url1)
                .then((result) => {
                    const value = result.rates.filter(element => element.asset_id_quote === 'USD' || element.asset_id_quote === 'EUR')
                    commit('setSingleCryptoData', value)
                    return value
                })
                .then(() => {
                    return getRequest(url2)
                })
                .then((result) => {
                    return commit('setCryptoIcons', result)
                })
                .then(() => {
                    return getRequest(url3)
                })
                .then((historicalData) => {
                    return commit('setHistoricalData', historicalData)
                })
        }
    }
}

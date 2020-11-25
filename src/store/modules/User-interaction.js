export default {
    namespaced: true,
    state: {
        isMenuOpen: false,
        isDataLoaded: true,
    },
    getters: {
        getIsMenuOpen: (state) => state.isMenuOpen,
        getIsDataLoaded: (state) => state.isDataLoaded
    },
    mutations: {
        setIsMenuOpen: (state, value) => {
            state.isMenuOpen = value;
        },
        setIsDataLoaded: (state, value) => {
            state.isDataLoaded = value;
        },
    }
}

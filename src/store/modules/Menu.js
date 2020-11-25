export default {
    namespaced: true,
    state: {
        isMenuOpen: false
    },
    getters: {
        getIsMenuOpen: (state) => state.isMenuOpen,
    },
    mutations: {
        setIsMenuOpen: (state, value) => {
            state.isMenuOpen = value;
        },
    }
}

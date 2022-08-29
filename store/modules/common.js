export default {
  state: () => ({
    isSearchModalVisible: false,
    searchQuery: '',
  }),
  mutations: {
    setSearchModalVisible(state, payload) {
      state.isSearchModalVisible = payload
    },
    setSearchQuery(state, payload) {
      state.searchQuery = payload
    },
  },
}

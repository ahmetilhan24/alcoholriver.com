export default {
  state: () => ({
    isSearchModalVisible: false,
    searchQuery: '',
  }),
  mutations: {
    setSearchModalVisible(state, payload) {
      console.log(payload)
      state.isSearchModalVisible = payload
    },
    setSearchQuery(state, payload) {
      state.searchQuery = payload
    },
  },
}

<template>
  <div id="modal" class="modal">
    <div class="modal__content flex--row row--middle--center">
      <input type="text" placeholder="Alkol ara" v-model="searchQuery" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchModal',
  data() {
    return {
      searchQuery: '',
    }
  },
  watch: {
    searchQuery(newVal) {
      this.$store.commit('modules/common/setSearchQuery', newVal)
    },
  },
  mounted() {
    this.clickOutsideHandler()
  },
  methods: {
    clickOutsideHandler() {
      const _t = this
      if (process.client) {
        window.addEventListener('click', function (e) {
          if (e.target.id === 'modal') {
            _t.$store.commit('modules/common/setSearchModalVisible', false)
          }
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  &__content {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100%;
    height: 60px;
    background-color: $white;
    box-shadow: 0 -2px 20px 0px rgba(0, 0, 0, 0.201);
    padding: 9px;
    justify-content: space-between;
    input {
      height: 100%;
      border: 2px solid $gray-one;
      border-radius: 8px;
      width: 100%;
      padding-left: 8px;
    }
  }
}
</style>

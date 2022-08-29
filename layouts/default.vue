<template>
  <div class="default-layout flex--column column--middle--center">
    <app-header />
    <router-view />
    <app-footer />

    <!--Modals-->
    <div class="modals">
      <SearchModal v-if="isSearchModalVisible" />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import AppHeader from './partials/app-header.vue'
import AppFooter from './partials/app-footer.vue'
import SearchModal from '~/components/modals/search-modal.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
    SearchModal,
  },
  computed: {
    ...mapState({
      isSearchModalVisible: (store) =>
        store.modules.common.isSearchModalVisible,
    }),
  },
}
</script>
<style lang="scss" scoped>
.default-layout {
  width: 100%;
}
</style>

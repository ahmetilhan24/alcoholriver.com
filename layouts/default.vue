<template>
  <div class="default-layout flex--column column--middle--center">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>
<script>
import AppHeader from './partials/app-header.vue'
import AppFooter from './partials/app-footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
<style lang="scss" scoped>
.default-layout {
  width: 100%;
}
</style>

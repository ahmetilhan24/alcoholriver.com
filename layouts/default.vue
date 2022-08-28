<template>
  <div class="default-layout">
    <app-header />
  </div>
</template>
<script>
import AppHeader from './partials/app-header.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
  },
}
</script>
<style lang="scss" scoped>
.default-layout {
  width: 100%;
}
</style>

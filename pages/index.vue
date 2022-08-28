<template>
  <div class="index-page flex--column column--middle--center">
    <alcohol-listing />
  </div>
</template>

<script>
import alcoholListing from '~/components/listing/alcohol-listing.vue'
export default {
  name: 'IndexPage',
  components: { alcoholListing },
}
</script>
<style lang="scss" scoped>
.index-page {
  width: 100%;
}
</style>

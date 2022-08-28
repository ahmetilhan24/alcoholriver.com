<template>
  <section class="alcohol-listing flex--row row--middle--center">
    <alcohol-card v-for="item in 40" :key="item" />
  </section>
</template>
<script>
export default {
  name: 'AlcoholListing',
}
</script>
<style lang="scss" scoped>
.alcohol-listing {
  padding: 0 100px;
  margin-top: 80px;
  width: 100%;
  flex-wrap: wrap;
}
</style>

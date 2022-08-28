<template>
  <section class="alcohol-listing flex--row row--middle--center">
    <alcohol-card v-for="item in alcoholsData" :key="item.name" :data="item" />
  </section>
</template>
<script>
import alcoholsData from '@/data/alcohols/alcohols.json'
export default {
  name: 'AlcoholListing',
  data() {
    return {
      alcoholsData,
    }
  },
}
</script>
<style lang="scss" scoped>
.alcohol-listing {
  margin-top: 80px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  @include large-device {
    padding: 0 50px;
  }
  @include medium-device {
    padding: 0 30px;
    margin-top: 50px;
  }
  @include small-device {
    padding: 0 10px;
  }
}
</style>

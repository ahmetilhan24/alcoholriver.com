<template>
  <section class="alcohol-listing flex--row row--tp--center">
    <alcohol-card
      v-for="item in alcoholsData"
      :key="item.name.toLowerCase()"
      :data="item"
    />
    <template v-if="!alcoholsData.length">
      <div class="not-result flex--column column--middle--center">
        <img src="@/static/logo.png" alt="" />
        <p>Böyle bir alkol yok...</p>
      </div>
    </template>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import alcoholsData from '@/data/alcohols/alcohols.json'
export default {
  name: 'AlcoholListing',
  data() {
    return {
      alcoholsData: [...alcoholsData],
    }
  },
  computed: {
    ...mapState({
      searchQuery: (store) => store.modules.common.searchQuery,
    }),
  },
  watch: {
    searchQuery(newVal) {
      this.alcoholsData = alcoholsData.filter((item) =>
        item.name.toLowerCase().includes(newVal.toLowerCase())
      )
    },
  },
}
</script>
<style lang="scss" scoped>
.alcohol-listing {
  margin-top: 120px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: calc(100vh - 350px);
  @include large-device {
    padding: 0 50px;
  }
  @include medium-device {
    padding: 0 30px;
    margin-top: 80px;
  }
  @include small-device {
    padding: 0 10px;
  }
  .not-result {
    width: 100%;
    img {
      filter: grayscale(1);
      margin-bottom: 10px;
    }
    p {
      color: $dark-three;
    }
  }
}
</style>

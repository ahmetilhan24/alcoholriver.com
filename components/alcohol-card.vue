<template>
  <article class="alcohol-card flex--column column--middle--center">
    <img
      src="@/data/alcohol-icons/beer.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.beer"
    />
    <img
      src="@/data/alcohol-icons/cocktail.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.cocktail"
    />
    <img
      src="@/data/alcohol-icons/liquor.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.liquor"
    />
    <img
      src="@/data/alcohol-icons/raki.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.raki"
    />
    <img
      src="@/data/alcohol-icons/wine.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.wine"
    />
    <img
      src="@/data/alcohol-icons/tequila.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.tequila"
    />
    <img
      src="@/data/alcohol-icons/whiskey.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.whiskey"
    />
    <img
      src="@/data/alcohol-icons/vodka.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.vodka"
    />
    <img
      src="@/data/alcohol-icons/cin.svg"
      alt=""
      v-if="data.category === ALCOHOL_CATEGORIES.cin"
    />
    <div class="alcohol-card__info flex--column column--middle--center">
      <div class="alcohol-title flex--row row--middle--center">
        <h2>{{ data?.name }}</h2>
      </div>
      <div class="alcohol-info flex--row row--middle--center">
        <div class="alcohol-info__box flex--column column--middle--center">
          <h3>{{ data.price }} <strong>₺</strong></h3>
        </div>
        <div class="alcohol-info__box flex--column column--middle--center">
          <h3>
            {{ data.alcoholPercentage ? data.alcoholPercentage : NaN }}
            <strong>%</strong>
          </h3>
        </div>
        <div class="alcohol-info__box flex--column column--middle--center">
          <h3>🤪</h3>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import { ALCOHOL_CATEGORIES } from '@/constants/alcohol-categories.constant'
export default {
  name: 'AlcoholCard',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      ALCOHOL_CATEGORIES,
    }
  },
}
</script>
<style lang="scss" scoped>
.alcohol-card {
  width: calc(25% - 20px);
  margin-bottom: 10px;
  height: 200px;
  border: 2px solid $dark-one;
  border-radius: 10px;
  justify-content: space-between;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.221) 0px 2px 8px;
  transition: 0.1s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  @include large-device {
    width: calc(33.33% - 12px);
  }
  @include small-device {
    width: calc(50% - 8px);
  }
  @include extra-small-device {
    width: calc(100%);
  }
  img {
    height: 40px;
  }
  &__info {
    width: 100%;
    height: 70%;
    margin-top: 15px;
    padding: 8px 0 0 0;
    .alcohol-title {
      background-color: $gray-two;
      border-radius: 5px 5px 0 0;
      width: 100%;
      height: 50px;
      text-align: center;
      h2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        @include golden-text(14);

        @include medium-device {
          @include golden-text(14);
        }

        @include small-device {
          @include golden-text(14);
        }
      }
    }

    h2,
    h3,
    h4 {
      font-weight: 800;
    }
    .alcohol-info {
      width: 100%;
      &__box {
        width: 33.33%;
        background-color: $white;
        padding: 10px 0;
        border: 1px solid $gray-two;
        h3 {
          margin-top: 5px;
          @include golden-text(18);
          @include medium-device {
            @include golden-text(17);
          }
          @include small-device {
            @include golden-text(16);
          }
        }
      }
    }
  }
}
</style>

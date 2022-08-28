<template>
  <article class="alcohol-card flex--column column--middle--center">
    <img src="@/data/alcohol-icons/beer-icon.svg" alt="" />
    <div class="alcohol-card__info flex--column column--middle--center">
      <h2>Bira</h2>
      <div class="alcohol-info flex--row row--middle--center">
        <div class="alcohol-info__box flex--column column--middle--center">
          <h3>36 <strong>₺</strong></h3>
        </div>
        <div class="alcohol-info__box flex--column column--middle--center">
          <h3>7 <strong>%</strong></h3>
        </div>
        <div class="alcohol-info__box flex--column column--middle--center">
          <h3>🤪</h3>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'AlcoholCard',
}
</script>
<style lang="scss" scoped>
.alcohol-card {
  width: calc(25% - 20px);
  margin: 10px;
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
    width: calc(33.33% - 20px);
  }
  @include small-device {
    width: calc(50% - 20px);
  }
  @include extra-small-device {
    width: calc(100%);
  }
  img {
    width: 40px;
    height: 40px;
  }
  &__info {
    width: 100%;
    background-color: $gray-two;
    border-radius: 5px;
    margin-top: 15px;
    padding: 8px 0 0 0;
    h2 {
      @include golden-text(22);

      @include medium-device {
        @include golden-text(20);
      }

      @include small-device {
        @include golden-text(18);
      }
    }
    h2,
    h3,
    h4 {
      font-family: $noto-font;
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

<template>
  <div style="width: 100%; overflow: hidden;">
    <swiper class="inner-swiper" :options="swiperOption">
      <swiper-slide class="inner-slide">Slide 1</swiper-slide>
      <swiper-slide class="inner-slide">Slide 2</swiper-slide>
      <swiper-slide class="inner-slide">Slide 3</swiper-slide>
      <swiper-slide class="inner-slide">Slide 4</swiper-slide>
      <swiper-slide class="inner-slide">Slide 5</swiper-slide>
      <swiper-slide class="inner-slide">Slide 6</swiper-slide>
      <swiper-slide class="inner-slide">Slide 7</swiper-slide>
      <swiper-slide class="inner-slide">Slide 8</swiper-slide>
      <swiper-slide class="inner-slide">Slide 9</swiper-slide>
      <swiper-slide class="inner-slide">Slide 10</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import * as types from '../../vuex/mutation-types'

  export default {
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 3,
          paginationClickable: true,
          spaceBetween: 30
        },
        swiperSlides: [1, 2, 3, 4, 5],
        items: [1, 2, 3, 4, 5]
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      this.swiper.slideTo(0, 0, false)
    },
    async created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 1)
    }

  }
</script>
<style>
  .inner-swiper {
    height: 300px;
    width: 100%;
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    transition-property: transform;
    box-sizing: content-box;
  }
  .inner-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    width: 300px;
    height: 300px;
    background-color: #eee;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
  }
</style>

<template>
  <div>
    未完待续
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
      }
    },
    async created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 1)
    }
  }
</script>
<style>
</style>

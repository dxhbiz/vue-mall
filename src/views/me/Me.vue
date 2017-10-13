<template>
  <div>
    未完待续
  </div>
</template>

<script>
  import * as types from '../../vuex/mutation-types'

  export default {
    async created () {
      this.$store.commit(types.CLICK_FOOT_ICON, 4)
    }
  }
</script>

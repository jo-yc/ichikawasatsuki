<template lang="pug">
  .content-wrapper
    HomeHeader(v-if="isHome")
    Header(v-else)
    router-view
    Footer
</template>

<script>
import HomeHeader from './src/components/HomeHeader'
import Header from './src/components/Header'
import Footer from './src/components/Footer'

export default {
  components: {
    HomeHeader,
    Header,
    Footer
  },

  computed: {
    isHome() {
      return this.$router.currentRoute.name === 'home'
    }
  }
}
</script>

<style scoped></style>

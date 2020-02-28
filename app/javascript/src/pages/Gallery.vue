<template lang="pug">
  .wrapper.light-wrapper
    .container.inner.pt-70.text-center
      .flickity-slider-container
        .flickity.flickity-slider-main
          .item(v-for="img in images")
            img(:src="img.pathLong" alt="")
        .flickity.flickity-slider-nav
          .item(v-for="img in images")
            img(:src="img.pathLong" alt="")
      .space50
      p
        | {{ $t('gallery.description') }}
</template>
<script>
export default {
  data () {
    return {
      category: '',
      images: []
    }
  },

  created() {
    this.importAll(require.context("../assets/images/art/wedding/", true, /\.jpg$/))
  },

  methods: {
    requireContext() {
      switch (this.category) {
        case 'wedding':
          return require.context("../assets/images/art/wedding/", true, /\.jpg$/)
        case 'family':
          return require.context("../assets/images/art/family/", true, /\.jpg$/)
        case 'maternity':
          return require.context("../assets/images/art/maternity/", true, /\.jpg$/)
        case 'new_born':
          return require.context("../assets/images/art/new_born/", true, /\.jpg$/)
        case 'profile':
          return require.context("../assets/images/art/profile/", true, /\.jpg$/)
        case 'business':
          return require.context("../assets/images/art/business/", true, /\.jpg$/)
        case 'event':
          return require.context("../assets/images/art/event/", true, /\.jpg$/)
        case 'etc':
          return require.context("../assets/images/art/etc/", true, /\.jpg$/)
        default:
          return null
      }
    },

    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })))
    },
  }
}
</script>

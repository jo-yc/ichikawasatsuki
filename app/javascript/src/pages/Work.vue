<template lang="pug">
  div
    .wrapper.light-wrapper
      .container.inner.pt-70.text-center
        #cube-grid.cbp.light-gallery
          .cbp-item(v-for="img in images")
            figure.overlay.overlay3.rounded
              a(:href="img.pathLong")
                img(:src="img.pathLong" alt="")
    .wrapper.light-wrapper
      .container.inner
        h2.section-title.text-center Other Works
        .cube-carousel.cbp.boxed.grid-view.text-center
          .cbp-item(v-for="(c_val, c_key) in $t('shootingTypes')")
            .box.bg-white.shadow.p-30
              figure.main.rounded.overlay.overlay1.mb-20
                a(:href="'/works/' + c_key")
                  img(:src="otherCategoryImgPath(c_key)" alt="")
                figcaption
                  h5.text-uppercase.from-top.mb-0 See Works
              h4.mb-0
                | {{ c_val }}
</template>
<script>
import weddingImg from '../assets/images/art/wedding/main.jpg'
import familyImg from '../assets/images/art/family/main.jpg'
import maternityImg from '../assets/images/art/maternity/main.jpg'
import newBornImg from '../assets/images/art/new_born/main.jpg'
import profileImg from '../assets/images/art/profile/main.jpg'
import businessImg from '../assets/images/art/business/main.jpg'
import eventImg from '../assets/images/art/event/main.jpg'
import etcImg from '../assets/images/art/etc/main.jpg'

export default {
  data () {
    return {
      images: []
    }
  },

  computed: {
    ajaxPath: () => {
      return '/api/gallery'
    }
  },

  created() {
    const gCategory = this.$route.params.id
    this.importAll(this.requireContext(gCategory))
  },

  methods: {
    requireContext(gCategory) {
      let that = this
      switch (gCategory) {
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

    otherCategoryImgPath: (category) => {
      let that = this
      let path = ''
      switch (category) {
        case 'wedding':
          path = weddingImg
          break
        case 'family':
          path = familyImg
          break
        case 'maternity':
          path = maternityImg
          break
        case 'new_born':
          path = newBornImg
          break
        case 'profile':
          path = profileImg
          break
        case 'business':
          path = businessImg
          break
        case 'event':
          path = eventImg
          break
        case 'etc':
          path = etcImg
          break
        default:
          break
      }
      return path
    }
  },
}
</script>

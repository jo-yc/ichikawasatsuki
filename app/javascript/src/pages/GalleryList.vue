<template lang="pug">
  .wrapper.light-wrapper
    .container.inner.pt-70
      .tiles.grid
        .items.row.isotope.boxed.grid-view.text-center
          .item.grid-sizer.col-md-6.col-lg-4(v-for="(c_val, c_key) in $t('shootingTypes')")
            .box.bg-white.shadow.p-30
              figure.main.polaroid.overlay.overlay1
                a(:href="'/gallery/' + c_key")
                  img(:src="imgPath(c_key)" alt="")
                figcaption
                  h5.text-uppercase.from-top.mb-0 See Gallery
              h4.text-uppercase.mb-0
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
  methods: {
    imgPath: (category) => {
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
  }
}
</script>

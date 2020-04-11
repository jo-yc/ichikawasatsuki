<template lang="pug">
  div
    .rev_slider_wrapper.fullscreen-container
      #slider10.rev_slider.fullscreenbanner(data-version="5.4.7")
        ul
          li(v-for="img in sliderImages" data-transition="fade" :data-thumb="img.pathLong")
            img(:src="img.pathLong" alt="")
        .tp-bannertimer.tp-bottom
    .wrapper.light-wrapper
      .container.inner
        h1.heading.text-center Jonathan Missio Photography
        p.lead.larger.text-center
          | Hi! I’m Jonathan, a documentary wedding photographer currently working from and living in London.
          br.d-none.d-lg-block
          | I absolutely love shooting wedding and couples because there are so much feeling to capture.
        .space30
        .tiles.grid
          .items.row.align-items-start.isotope.boxed.grid-view.text-center
            .item.grid-sizer.col-md-6
              .box.bg-pastel-default.p-30
                figure.main.mb-20.overlay.overlay1.rounded
                  a(href="/about")
                    img(:src="require('../assets/images/art/about9.jpg')" alt="")
                  figcaption
                    h5.text-uppercase.from-top.mb-0 Learn More
                h5.mb-0 ABOUT
            .item.grid-sizer.col-md-6
              .box.bg-pastel-default.p-30
                figure.main.mb-20.overlay.overlay1.rounded
                  a(href="/works")
                    img(:src="require('../assets/images/art/f16.jpg')" alt="")
                  figcaption
                    h5.text-uppercase.from-top.mb-0 Featured Shots
                h5.mb-0 WORKS
            .item.grid-sizer.col-md-3
              .box.bg-pastel-default.p-30
                figure.main.mb-20.overlay.overlay1.rounded
                  a(href="/gallery")
                    img(:src="require('../assets/images/art/f17.jpg')" alt="")
                  figcaption
                    h5.text-uppercase.from-top.mb-0 Read Entries
                h5.mb-0 GALLERY
            .item.grid-sizer.col-md-3
              .box.bg-pastel-default.p-30
                figure.main.mb-20.overlay.overlay1.rounded
                  a(href="/contact")
                    img(:src="require('../assets/images/art/f18.jpg')" alt="")
                  figcaption
                    h5.text-uppercase.from-top.mb-0 Get in Touch
                h5.mb-0 CONTACT
    .wrapper.bg-pastel-default
      .container.inner
        h2.section-title.text-center Featured Shots
        p.lead.larger.text-center Photography is my passion and I love to turn ideas into beautiful things.
        .space30
        .flickity-carousel-container.fullscreen
          .flickity.flickity-carousel
            .item.mr-15(v-for="img in galleryImages")
              img(:src="img.pathLong" alt="")
          p.flickity-status
    .wrapper.image-wrapper.bg-image.inverse-text(:data-image-src="require('../assets/images/art/bg16.jpg')")
      .container.inner.pt-150.pb-150
        h1.heading.text-center
          | I take photographs with
          br.d-none.d-lg-block
          | creativity, concept & passion
    .wrapper.light-wrapper
      .container.inner
        h2.section-title.mb-40.text-center Notes from Love Bugs
        .row
          .col-md-10.offset-md-1
            .cube-slider.cbp-slider-edge.cbp
              .cbp-item.pl-60.pr-60.pb-10
                .row.d-flex
                  .col-md-6.pr-35.pr-sm-15
                    figure
                      img(:src="require('../assets/images/art/te1.jpg')" alt="")
                  .col-md-6.align-self-center
                    blockquote.icon.icon-left
                      p Consectetur adipiscing elit. Duis mollis, est non commodo luctus gestas eget quam integer. Curabitur blandit tempus rutrum faucibus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                      footer.blockquote-footer Mildred & Austin
              .cbp-item.pl-60.pr-60.pb-10
                .row.d-flex
                  .col-md-6.pr-35.pr-sm-15
                    figure
                      img(:src="require('../assets/images/art/te2.jpg')" alt="")
                  .col-md-6.align-self-center
                    blockquote.icon icon-left
                      p Consectetur adipiscing elit. Duis mollis, est non commodo luctus gestas eget quam integer. Curabitur blandit tempus rutrum faucibus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                      footer.blockquote-footer Mildred & Austin
              .cbp-item.pl-60.pr-60.pb-10
                .row.d-flex
                  .col-md-6.pr-35.pr-sm-15
                    figure
                      img(:src="require('../assets/images/art/te3.jpg')" alt="")
                  .col-md-6.align-self-center
                    blockquote.icon.icon-left
                      p Consectetur adipiscing elit. Duis mollis, est non commodo luctus gestas eget quam integer. Curabitur blandit tempus rutrum faucibus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                      footer.blockquote-footer Mildred & Austin
</template>
<script>
export default {
  data() {
    return {
      sliderImages: [],
      galleryImages: []
    }
  },

  created() {
    this.importAll(require.context("../assets/images/art/home_slider/", true, /\.jpg$/), this.sliderImages)
    this.importAll(require.context("../assets/images/art/wedding/", true, /\.jpg$/), this.galleryImages)
  },

  methods: {
    importAll(r, d) {
      r.keys().forEach(k => (d.push({ pathLong: r(k), pathShort: k })))
    },
  }
}
</script>

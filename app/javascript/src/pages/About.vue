<template lang="pug">
  .content-wrapper
    .wrapper.light-wrapper
      .container.inner.pt-60
        .boxed
          .bg-white.shadow.rounded
            .image-block-wrapper
              .image-block.col-lg-6
                .image-block-bg.bg-image(:data-image-src="profileImg")
              .container-fluid
                .row
                  .col-lg-6.offset-lg-6
                    .box.d-flex
                      .align-self-center
                        h3.mb-20 I'm here to capture your moments
                        p.lead Hi! I’m Missio, a wedding photographer currently working and residing in London. I absolutely love shooting weddings because there are so many feelings to capture.
                        p Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus.
                        ul.social.social-color
                          li
                            a(href="https://twitter.com/ichikawasatsuki")
                              i.fa.fa-twitter
                          li
                            a(href="https://www.facebook.com/satsukiichikawa.photography")
                              i.fa.fa-facebook
                          li
                            a(href="https://www.instagram.com/satsukiichikawa")
                              i.fa.fa-instagram
    .wrapper.light-wrapper
      .container.inner
        h2.section-title.text-center Happy Customers
        .cube-carousel.cbp
          .cbp-item
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Connor Gibson
          .cbp-item
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Coriss Ambady
          .cbp-item
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Barclay Widerski
          .cbp-item
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Nikola Brooten
          .cbp-item
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Jackie Sanders
          .cbp-item
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Cory Zamora
          .cbp-item
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Pierce Bailey
    .wrapper.gray-wrapper
      .container.inner
        h2.section-title.text-center Instagram Feed
        p.lead.text-center Here you will find the latest shots from our Instagram feed.
        .space20
        .tiles.tiles-s
          #instafeed.items.row
        .space40
        .text-center
          a.btn(href="#") Instagram Page
</template>

<script>
import mainProfile from '../assets/images/art/about2.jpg'
export default {
  data () {
    return {
      profileImg: mainProfile
    }
  }
}
</script>

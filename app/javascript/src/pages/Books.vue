<template lang="pug">
  .wrapper.light-wrapper
      .container.inner.pt-60
        .blog.classic-view
          .post.text-center
            figure.rounded
              img(:src="mainImg" alt="")
            .space40
            .row.post-content.text-left
              .col-md-8.offset-md-2
                h1.post-title Ullamcorper Ridiculus Tristique Adipiscing
                p Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget porta ac consectetur vestibulum.</p>
                p Donec sed odio dui consectetur adipiscing elit. Etiam adipiscing tincidunt elit, eu convallis felis suscipit ut. Phasellus rhoncus tincidunt auctor. Nullam eu sagittis mauris. Donec non dolor ac elit aliquam tincidunt at at sapien. Aenean tortor libero, condimentum ac laoreet vitae, varius tempor nisi. Duis non arcu vel lectus urna mollis ornare vel eu leo.
                .space10
                blockquote.icon.icon-left
                  p Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>
                  footer.blockquote-footer Very important person
                .space10
                h3 Sit Vulputate Bibendum Purus
                p Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                .space10
                .light-gallery
                  figure.overlay.overlay3.rounded
                    a(:href="contentImg1")
                      img(:src="contentImg1" alt="")
                  .space30
                  figure.overlay.overlay3.rounded
                    a(:href="contentImg2")
                      img(:src="contentImg2" alt="")
                .clearfix
                .space20
                p Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vestibulum id ligula porta felis euismod semper. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet.
          .row
            .col-md-8.offset-md-2
              .divider-icon
                i.si-photo_aperture
</template>
<script>
import mainImg from '../assets/images/art/b1.jpg'
import contentImg1 from '../assets/images/art/bp1.jpg'
import contentImg2 from '../assets/images/art/bp2.jpg'

export default {
  data() {
    return {
      mainImg: mainImg,
      contentImg1: contentImg1,
      contentImg2: contentImg2
    }
  }
}
</script>

<template lang="pug">
  .content-wrapper
    .wrapper.light-wrapper
      .container.inner.pt-60
        .boxed
          .bg-white.shadow.rounded
            .image-block-wrapper
              .image-block.col-lg-6
                img.image-block-bg.bg-image(:src="profileImg")
                //- img.image-block-bg.bg-image(data-image-src="https://res.cloudinary.com/jo-test/image/upload/v1594141502/about2_qm5a4z.jpg")
              .container-fluid
                .row
                  .col-lg-6.offset-lg-6
                    .box.d-flex.w-100
                      .align-self-center.w-100
                        h3.mb-20(v-show="!editMode")
                          | {{ title }}
                        h3#new-title.mb-20(contenteditable="true" v-show="editMode" :class="{'edit-mode-input': editMode}")
                        p.lead(v-show="!editMode")
                          | {{ subTitle }}
                        p#new-sub-title.lead(contenteditable="true" v-show="editMode" :class="{'edit-mode-input': editMode}")
                        p(v-show="!editMode")
                          | {{ body }}
                        p#new-body(contenteditable="true" v-show="editMode" :class="{'edit-mode-input': editMode}")
                        ul.social.social-color
                          li
                            a(href="https://twitter.com/ichikawasatsuki" target="_blank")
                              i.fa.fa-twitter
                          li
                            a(href="https://www.facebook.com/satsukiichikawa.photography" target="_blank")
                              i.fa.fa-facebook
                          li
                            a(href="https://www.instagram.com/satsukiichikawa" target="_blank")
                              i.fa.fa-instagram
    .wrapper.light-wrapper
      .container.inner
        h2.section-title.text-center(v-show="!editMode")
          | {{ cvTitle }}
        h2#new-cv-title.section-title.text-center(contenteditable="true" v-show="editMode" :class="{'edit-mode-input': editMode}")
        .cube-carousel.cbp(v-show="!editMode")
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
        .cube-carousel2.cbp2.clearfix(v-show="editMode")
          .cbp-item2.float-left
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p(contenteditable="true") Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Connor Gibson
          .cbp-item2.float-left
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p(contenteditable="true") Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Coriss Ambady
          .cbp-item2.float-left
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p(contenteditable="true") Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Barclay Widerski
          .cbp-item2.float-left
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p(contenteditable="true") Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Nikola Brooten
          .cbp-item2.float-left
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p(contenteditable="true") Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Jackie Sanders
          .cbp-item2.float-left
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p(contenteditable="true") Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
                footer.blockquote-footer Cory Zamora
          .cbp-item2.float-left
            .box.bg-white.shadow
              blockquote.icon.icon-left
                p(contenteditable="true") Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula lacinia odio.
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

    EditButton(:editMode="editMode" @toggleEditMode="toggleEditMode" @update="update")
</template>

<script>
import Vue from 'vue'
import EditButton from '../components/EditButton'
import { mapState, mapMutations, mapActions } from 'vuex'
import Cloudinary from 'cloudinary-vue'
Vue.use(Cloudinary)

export default {
  components: {
    EditButton
  },

  computed: {
    ...mapState('resources/about', ['title', 'subTitle', 'body', 'profileImg', 'cvTitle']),
  },

  data () {
    return {
      editMode: false
    }
  },

  mounted() {
    this.load()
  },

  methods: {
    ...mapActions('resources/about', ['loadContents', 'updateContents']),

    load() {
      this.loadContents().then(response => {
        let titleEl = document.getElementById('new-title')
        let subTitleEl = document.getElementById('new-sub-title')
        let bodyEl = document.getElementById('new-body')
        let cvTitleEl = document.getElementById('new-cv-title')

        titleEl.innerText = response.body.title
        subTitleEl.innerText = response.body.sub_title
        bodyEl.innerText = response.body.body
        cvTitleEl.innerText = response.body.cv_title
      })
    },

    toggleEditMode() {
      this.editMode = !this.editMode
      if (!this.editMode) this.resetText()
    },

    resetText() {
      let titleEl = document.getElementById('new-title')
      let subTitleEl = document.getElementById('new-sub-title')
      let bodyEl = document.getElementById('new-body')
      let cvTitleEl = document.getElementById('new-cv-title')

      titleEl.innerText = this.title
      subTitleEl.innerText = this.subTitle
      bodyEl.innerText = this.body
      cvTitleEl.innerText = this.cvTitle
    },

    update() {
      let titleEl = document.getElementById('new-title')
      let subTitleEl = document.getElementById('new-sub-title')
      let bodyEl = document.getElementById('new-body')
      let cvTitleEl = document.getElementById('new-cv-title')

      const params = {
        about: {
          title: titleEl.innerText,
          sub_title: subTitleEl.innerText,
          body: bodyEl.innerText,
          cv_title: cvTitleEl.innerText
        }
      }
      this.updateContents(params).then(response => {
        this.toggleEditMode()
      })
    }
  }
}
</script>

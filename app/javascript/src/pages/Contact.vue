<template lang="pug">
  .wrapper.light-wrapper#contact
    .container.inner.pt-70
      .row
        .col-lg-8.offset-lg-2
          h2.section-title.text-center
            | {{ $t('contact.title') }}
          p.text-center
            | {{ $t('contact.description') }}
          .space20
          .form-container
            form(@submit.prevent="sendContact")
              ValidationObserver.row(ref="form" v-slot="{ validated, passed, reset }")
                ValidationProvider.col-md-6.pr-10(name="name" rules="required" v-slot="{ errors }")
                  .form-group
                    input.contact-input(v-model="name" type="text" :placeholder="$t('placeholder.name')" :class="{'form-danger': errors.length > 0}")
                ValidationProvider.col-md-6.pl-10(name="email" rules="required|email" v-slot="{ errors }")
                  .form-group
                    input.contact-input(v-model="email" type="text" :placeholder="$t('placeholder.email')" :class="{'form-danger': errors.length > 0}")
                ValidationProvider.col-md-12(name="date" rules="required" v-slot="{ errors }")
                  .form-group
                    datetime(v-model="date" type="datetime" :minute-step="5" :week-start="7" min-datetime="#{DateTime.iso8601(DateTime.now.to_s)}" :placeholder="$t('placeholder.date')" :input-class="{'form-danger': errors.length > 0 && validated, 'contact-input': true}")
                ValidationProvider.col-md-12(name="shootingTypes" rules="required" v-slot="{ errors }")
                  .form-group
                    .custom-control.custom-checkbox.custom-control-inline(v-for="(item, val) in defaultShootingTypes")
                      input.custom-control-input(v-model="shootingTypes" type="checkbox" :id="'item-' + val" :value="val")
                      label.custom-control-label(:class="{'form-danger': errors.length > 0}" :for="'item-' + val")
                        | {{ item }}
                ValidationProvider.col-12(name="place" rules="required" v-slot="{ errors }")
                  .form-group
                    input.contact-input(v-model="place" type="text" :placeholder="$t('placeholder.place')" :class="{'form-danger': errors.length > 0}")
                ValidationProvider.col-12(name="message" rules="required" v-slot="{ errors }")
                  textarea.contact-input.pt-10(v-model="message" :placeholder="$t('placeholder.message')" :class="{'form-danger': errors.length > 0}" rows="3")
                ValidationProvider.col-12(name="privacyPolicy" rules="required" v-slot="{ errors }")
                  .form-group
                    .custom-control.custom-checkbox
                      input#privacy-policy.custom-control-input(v-model="privacyPolicy" type="checkbox" value="true")
                      label.custom-control-label(:class="{'form-danger': errors.length > 0}" for="privacy-policy")
                        p#privacy-policy-text
                .space20
                .col-12(v-if="notice")
                  .alert.alert-success(role="alert")
                    | {{ notice }}
                .col-12.text-center
                  button.btn(:class="{'state-error': validated && !passed && !pristine }" type="submit")
                    | {{ btnText }}
                footer.notification-box
</template>

<script>
import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

import i18nEn from '../locales/messages/en.json'
import i18nJa from '../locales/messages/ja.json'

export default {
  components: {
    Datetime
  },

  data() {
    return {
      name                : '',
      email               : '',
      date                : null,
      shootingTypes       : [],
      place               : '',
      message             : '',
      privacyPolicy       : [],
      defaultShootingTypes: i18nJa.shootingTypes,
      btnText             : '',
      notice              : '',
      errs                : '',
    };
  },

  computed: {
    ajaxPath: () => {
      return 'api/contact'
    }
  },
  created() {},
  mounted() {
    let privacyPolicyText = document.getElementById('privacy-policy-text')
    privacyPolicyText.innerHTML = i18nJa.privacyPolicy.message

    this.btnText = i18nJa.buttons.defaultMsg
  },
  methods: {
    sendContact(){
      let that = this
      let params = {
        contact: {
          name          : this.name,
          email         : this.email,
          date          : this.date,
          shooting_types: this.shootingTypes,
          place         : this.place,
          message       : this.message,
          privacy_policy: this.privacyPolicy[0]
        }
      }

      this.$refs.form.validate().then((result) => {
        if (result) {
          this.btnText = i18nJa.buttons.processingMsg
          this.$http.post(this.ajaxPath, params).then((response) => {
            that.notice        = response.data.message
            that.btnText       = i18nJa.buttons.sentMsg
            that.name          = ''
            that.email         = ''
            that.date          = ''
            that.shootingTypes = []
            that.place         = ''
            that.message       = ''
            that.privacyPolicy = []
            this.$refs.form.reset()
          }, function (response) {
            that.errs    = response.data
            that.btnText = i18nJa.buttons.errorMsg
          })
        }
      }).catch(() => {
        that.btnText = i18nJa.buttons.btnErrorMsg
      })
    },
  }
}
</script>

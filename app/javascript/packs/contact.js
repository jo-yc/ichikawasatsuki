import Vue from 'vue/dist/vue.min'
import VueResource from 'vue-resource/dist/vue-resource.min'
import VeeValidate from 'vee-validate'
// https://github.com/mariomka/vue-datetime
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(VueResource)
Vue.use(VeeValidate)
Vue.use(Datetime)

Vue.component('contact-component', {
  template: '#contact-component',
  data: () => {
    return {
      name                : '',
      email               : '',
      date                : '',
      shootingItems       : [],
      place               : '',
      message             : '',
      privacyPolicy       : true,
      defaultShootingItems: [],
      btnText             : '',
      notice              : '',
      errs                : '',
    }
  },
  props: {
    ajaxPath        : String,
    getDataAjaxPath : String,
    btnDefaultMsg   : String,
    btnProcessingMsg: String,
    btnSentMsg      : String,
    btnErrorMsg     : String,
  },
  mounted(){
    let that = this
    this.btnText = this.btnDefaultMsg
    Vue.http.get(this.getDataAjaxPath).then(function(response){
      that.defaultShootingItems = response.data
    })
  },
  methods: {
    sendContact(){
      let that = this
      let params = {
        contact: {
          name          : this.name,
          email         : this.email,
          date          : this.date,
          shooting_items: this.shootingItems,
          place         : this.place,
          message       : this.message,
          privacy_policy: this.privacyPolicy
        }
      }
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.btnText = this.btnProcessingMsg
          Vue.http.post(this.ajaxPath, params).then((response) => {
            that.notice        = response.data.message
            that.btnText       = that.btnSentMsg
            that.name          = ''
            that.email         = ''
            that.date          = ''
            that.shootingItems = []
            that.place         = ''
            that.message       = ''
            this.$validator.reset()
          }, function (response) {
            that.errs    = response.data
            that.btnText = that.btnErrorMsg
          })
        }
      }).catch(() => {
        that.btnText = that.btnErrorMsg
      })
    },
  }
})

const Contact = new Vue({
  el: '#contact',
})

export default Contact

import Vue from 'vue'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  configure,
  localize
} from 'vee-validate'

import { required, email } from 'vee-validate/dist/rules'

import en from 'vee-validate/dist/locale/en.json';
import ja from 'vee-validate/dist/locale/ja.json';

import i18n from '../locales';

// Install English and Japanese locales.
localize({
  ja,
  en
});

configure({
  defaultMessage: (field, values) => {
    // override the field name.
    values._field_ = i18n.t(`fields.${field}`);

    return i18n.t(`validations.${values._rule_}`, values);
  }
});

// Extend rules
extend('required', required)
extend('email', email)

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

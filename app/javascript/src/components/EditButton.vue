<template lang="pug">
  .edit-btn-wrap
    button.btn.btn-teal(@click.prevent="toggleEditMode" v-show="!editMode") コンテンツ編集
    button.btn.btn-meander(@click.prevent="update" v-show="editMode") 保存
    button.btn.btn-pastel-red.text-white(@click.prevent="toggleEditMode" v-show="editMode") キャンセル
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  components: {},

  data() {
    return {}
  },

  props: ['editMode'],

  computed: {},

  created() {},

  mounted() {},

  methods: {
    toggleEditMode() {
      this.$emit('toggleEditMode')
    },

    update() {
      this.$emit('update')
    }
  }
};
</script>

<template>
  <div class="notification " :class="this.$store.getters.message.color"  v-show="this.$store.getters.message.is_visible">
    <button class="delete" @click="hideMessage"></button>
    {{ this.$store.getters.message.message }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  data: () => ({
    message: {}
  }),
  methods: {
    mounted: function () {

    },
    hideMessage: function () {
      this.$store.commit('hideMessage')
    }
  }

}
</script>

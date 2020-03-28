<template>
  <button class="button is-small is-fullwidth is-outlined" @click="createEvent">Agregar</button>
</template>

<script>
export default {
  name: 'CreateButton',
  props: ['state'],
  data: () => ({}),
  methods: {
    createEvent: function () {
      this.$emit('handler', this.state)
    }
  }

}
</script>

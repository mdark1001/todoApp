<template>

  <div class="column is-12-mobile is-4-desktop is-4-tablet is-mobile">
    <article :class="column.color">
      <div class="message-header">
        <p>{{ column.name }}</p>
      </div>
      <div class="message-body" :id="column.key">

      </div>
      <CreateButton v-if="column.create" :state="column.key" @handler="handler"></CreateButton>
    </article>
  </div>
</template>

<script>
import CreateButton from '@/components/task/CreateButton.vue'

export default {
  name: 'Column',
  props: ['column'],
  components: {
    CreateButton
  },
  data: () => ({}),
  methods: {
    handler: function (data) {
      console.log(data)
    }
  }

}
</script>

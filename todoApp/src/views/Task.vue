<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Listado de tareas</h1>
      <div class="columns is-mobile is-desktop is-tablet is-multiline" id="sectioncontainer">

        <Columns v-for="state in states" :column="state" :key="state.key"></Columns>

      </div>
    </div>
  </section>
</template>

<script>
import Columns from '@/components/task/Columns.vue'
import States from '../services/states'

console.log(States)
export default {
  name: 'Task',
  components: {
    Columns
  },
  data: () => ({
    states: States.columns
  }),
  methods: {}

}
</script>
<style>
  #sectioncontainer {
    margin-top: 20px;
  }

  /* Keep from sticking to sides */
  .cards-container {
    max-width: 100%;
  }

  .board-item {
    margin: 5px 0;
    will-change: transform;
  }

  .board-item-content {
    word-break: break-all;
    position: relative;
    padding: 20px;
    background: #fff;
    border-radius: 4px;
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    -webkit-box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.2);
    margin: 5px;
  }

  .delete {
    pointer-events: auto;
  }

  footer {
    margin-top: 2rem;
  }
</style>

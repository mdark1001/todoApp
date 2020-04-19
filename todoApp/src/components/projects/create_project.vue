<template>
  <div class="modal" :class="{'is-active': modal_active}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Crear proyecto</p>
        <button class="delete" aria-label="close" @click="hide_modal_project"></button>
      </header>
      <section class="modal-card-body">
        <form action="" class="box">
          <message></message>
          <div class="field">
            <label for="title" class="label">Proyecto:</label>
            <div class="control">
              <input name="title" id="title"
                     v-model="project.title"
                     class="input is-large" type="text"
                     placeholder="Nombre del proyecto">
            </div>
          </div>
          <div class="field">
            <label for="" class="label">Prioridad</label>
            <div class="control">
              <div class="select">
                <select name="priority"
                        v-model="project.priority"
                        id="priority">
                  <option value="1">Normal</option>
                  <option value="2">Alta</option>
                  <option value="3">Urgente</option>
                </select>
              </div>
            </div>
          </div>
          <div class="field">
            <label for="" class="label">Descripción</label>
            <div class="control">
              <textarea id="description"
                        v-model="project.description"
                        name="description" class="textarea" rows="3"></textarea>
            </div>
          </div>
          <div class="field">

            <div class="control">
              <button
                type="button"

                @click="create_project"
                class="button is-outlined is-success is-fullwidth"
                :class="{'is-loading':is_loading}"
              >Agregar
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
  import ProjectServices from '../../services/ProjectService'
  import Message from '@/components/message'

  const projectServices = new ProjectServices()
  export default {
    components: {Message},
    name: '',
    props: ['modal_active'],
    comṕonets: {Message},
    data: () => ({
      project: {
        title: '',
        priority: 1,
        description: '',
        userId: ''
      },
      is_loading: false
    }),
    methods: {
      hide_modal_project: function () {
        this.$emit('hide_modal_project')
      },
      create_project: function () {
        this.is_loading = true
        this.project.userId = this.$store.getters.user_id

        console.log(this.project)
        projectServices.create(this.project, this.$store.getters.token).then(res => {
          this.is_loading = false
          if (res.status === 200) {
            this.$emit('hide_modal_project')
          }
        }).catch(err => {
          console.log(err)
          this.$store.commit('setMessage', {is_visible: true, message: err.response.data.message})
          this.is_loading = false
        })
      }

    }
  }
</script>

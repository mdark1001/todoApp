<template>
  <div class="">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Proyectos
          </h1>
          <h2 class="subtitle">
            Gestión de proyectos y equipo de trabajo
          </h2>
        </div>
      </div>
    </section>

    <create-project :modal_active="modal_active" v-on:hide_modal_project="modal_active=false"></create-project>

    <section class="section">
      <div class="container">

        <div class="columns is-multiline ">

          <Project v-for="project in projects" :key="project._id" :project="project"/>
          <div class="column is-4-desktop ">
            <div class="card" @click="show_modal_project">
              <div class="card-content">
                  <div class="button_card_plus">

                  </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
  import Project from '@/components/projects/project'
  import CreateProject from '@/components/projects/create_project'
  import ProjectServices from '../services/ProjectService'

  const projectServices = new ProjectServices()
  export default {
    name: 'Projects',
    components: {Project, CreateProject},
    data: () => ({
      modal_active: false,
      projects: []
    }),
    mounted() {
      projectServices.getProjects(this.$store.getters.token).then(res => {
        console.log(res)
        this.projects = res.data.projects
        console.log(this.projects)
      }).catch(err => {
        console.log(err)
      })
    },
    methods: {
      show_modal_project: function () {
        this.modal_active = true
      }
    }
  }
</script>

<style scoped lang="scss">
  .column .card {
    height: 100%
  }

  button.is-card-button {
    margin: 0;
    padding: 0;
  }

  .button_card_plus{
    border-radius: 50%;
    opacity: 0.2;
    content: url("../assets/images/plus.svg");
    width: 100px;
    height: 100px;
    margin:0 auto;
  }
</style>

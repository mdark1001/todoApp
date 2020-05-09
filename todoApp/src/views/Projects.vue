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
          <div class="column is-12">
            <button type="button"
            class="button is-primary is-outlined"
            @click="show_modal_project"
            >Agregar proyecto</button>
          </div>
          <div class="column is-12 is-fullwidth">
            <vuetable ref="vuetable"
            :api-mode="false"
            :data="projects"
            :fields="fieldsSet"
            :css="VueTableCss.table"
            data-path=""
            pagination-path=""
            ></vuetable>
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
import Vuetable from 'vuetable-2'
import VueTableCss from '../services/vue-table-css.js'
console.log(VueTableCss);

const projectServices = new ProjectServices()
export default {
  name: 'Projects',
  components: {Project, CreateProject,Vuetable},
  data: () => ({
    modal_active: false,
    projects: [],
    VueTableCss: VueTableCss,
    fieldsSet:[
      {
        name:'title',
        title: 'Nombre del proyecto',
        sortField:'title',
      },
      {
        name:'priority',
        title: 'Prioridad',
        sortField:'priority',
        formatter:projectServices.getViewPriority
      },
      {
        name:'userId.alias',
        title: 'Creador',
        formatter:(value)=>`<a href="/public-profile?user=@${value}" >@${value}</a>`

      },
      {
        name:'createdAt',
        title:'Creado en',
        formatter: projectServices.formatterDate

      }


    ]
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
.plus{
  height: 50% !important;
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

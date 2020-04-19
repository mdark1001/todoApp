<template>
  <nav class="navbar  " role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">

        <img src="../assets/images/edrp-claro.svg" width="112" height="28">
        SEA
      </a>

      <a role="button" class="navbar-burger burger" v-on:click="setActive" aria-label="menu"
         aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" :class="{'navbar-menu':true,'is-active':is_active}">
      <div class="navbar-start" v-if="this.$store.getters.is_logged">
        <router-link to="/project" class="navbar-item">
          Proyectos
        </router-link>
        <router-link to="/task" class="navbar-item">
          Tareas
        </router-link>
        <router-link to="/graphs" class="navbar-item">
          Rendimiento
        </router-link>
        <router-link to="/about" class="navbar-item">
          Acerca de
        </router-link>
      </div>

      <div class="navbar-end" v-if="!this.$store.getters.is_logged">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/register" class="button is-info">
              <strong>Registrate</strong>
            </router-link>
            <router-link to="/login" class="button is-light">
              Ingresar
            </router-link>
          </div>
        </div>
      </div>

      <div class="navbar-end" v-if="this.$store.getters.is_logged">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" title="">
            <b>
              @{{ this.$store.getters.user.alias}}
            </b>
          </a>

          <div class="navbar-dropdown">

            <router-link :to="{ path: '/profile', params: { userId: this.$store.getters.user_id }}">
              <span class="icon has-text-warning  is-medium">
                <i class="fa fa-user"/>
              </span>
              Mi perfil
            </router-link>
            <hr class="navbar-divider">
            <a href="/register" class="navbar-item" title="Cerrar sesión" @click="logout">
              <span class="icon has-text-warning  is-medium">
                <i class="fa fa-sign-out"></i>
              </span>
              Cerrar sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data: () => ({
      is_active: false
    }),
    methods: {
      setActive() {
        this.is_active = !this.is_active
      },
      logout: function () {
        window.localStorage.clear()
        this.$store.commit('logout')
        this.$router.push('/')
      }
    }

  }
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        Todo List App
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
         data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">
          Tareas
        </router-link>
        <router-link to="/graphs" class="navbar-item">
          Rendimiento
        </router-link>
        <router-link to="/about" class="navbar-item">
          Acerca de
        </router-link>
      </div>

      <!--<div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({}),
  methods: {}

}
</script>

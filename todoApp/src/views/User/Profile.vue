<template>
  <div>
    <section class="section">

      <div class="container">
        <h3 class="title">Personal</h3>

    <form action="" class="box">
      <message></message>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="name" class="label">Nombre</label>
        </div>
        <div class="field-body">
          <div class="control has-icons-left ">
            <input type="text" name="name"

                   v-model="name" placeholder="Juan Peréz"
                   class="input  is-medium"
                   required>
            <span class="icon is-small is-left">
                  <i class="fa fa-user"></i>
                </span>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="alias" class="label">Alias</label>
        </div>
        <div class="field-body">
          <div class="">
            <div class="control has-icons-left ">
              <input type="text" name="alias"

                     v-model="alias" placeholder="JPerez"
                     class="input  is-medium"
                     required>
              <span class="icon is-small is-left">
                  <i class="fa fa-at"></i>
                </span>
            </div>
            <p class="help">Se usará para mostrar en los proyectos y tareas</p>
          </div>

        </div>

      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label for="email" class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="control has-icons-left ">
            <input type="email" name="email"

                   v-model="email" placeholder="juan.perez@gmail.com"
                   class="input  is-medium"
                   required>
            <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div m>
              <div class="control">

                <button type="button" class="button is-info is-outlined is-overlay"
                        @click="register"
                        :class="{'is-loading':is_loading}">
                  Actualizar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </form>
      </div>

  </section>
    <section class="section">
      <div class="container">
        <h3 class="title">Seguridad</h3>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label for="password" class="label">Contraseña</label>
          </div>
          <div class="field-body">
            <div class="control has-icons-left ">
              <input type="password" name="password"

                     v-model="password" placeholder="******"
                     class="input  is-medium"
                     required>
              <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label for="password2" class="label">Confirmar Contraseña</label>
          </div>
          <div class="field-body">
            <div class="control has-icons-left ">
              <input type="password" name="password1"

                     v-model="password1" placeholder="******"
                     class="input  is-medium"
                     required>
              <span class="icon is-small is-left">
                   <i class="fa fa-lock"></i>
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: '',
  data: () => ({

  }),
  methods: {

  }

}
</script>

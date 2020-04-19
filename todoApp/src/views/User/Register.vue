<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">

          <div class="column ">

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

              <div class="field is-horizontal">
                <div class="field-label">
                  <!-- Left empty for spacing -->
                </div>
                <div class="field-body">
                  <div class="field">
                    <div m>
                      <div class="control">

                        <button type="button" class="button is-primary is-outlined is-overlay"
                                @click="register"
                                :class="{'is-loading':is_loading}">
                          Ingresar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Message from '@/components/message'
import UserService from '../../services/UserService'
import { required, minLength } from 'vuelidate/lib/validators'

const user = new UserService()
export default {
  name: 'Register',
  components: { Message },
  data: () => ({
    name: '',
    alias: '',
    password: '',
    password1: '',
    email: '',
    is_loading: false
  }),
  validations: {
    name: {
      required,
      minLength: minLength(4)

    }
  },
  methods: {
    register () {
      console.log(user)
      this.is_loading = true
      if (this.$v.$invalid) {
        this.$store.commit('setMessage',
          { is_visible: true, message: 'Por favor revise los campos' }
        )
        this.is_loading = false
      } else {
        user.register({
          name: this.name,
          alias: this.alias,
          password: this.password,
          email: this.email
        }).then(res => {
          if (res.status === 200) {
            this.$store.commit('setMessage', { is_visible: true, message: 'Se registro correctamente, ahora puede ', color: 'is-success' })
            setTimeout(() => { this.$router.push('/login') }, 1000)
          } else {
            this.is_loading = false
          }
        }).catch(err => {
          console.log(err)
          this.$store.commit('setMessage', { is_visible: true, message: err.response.data.message })
          this.is_loading = false
        })
      }
    }

  }

}
</script>

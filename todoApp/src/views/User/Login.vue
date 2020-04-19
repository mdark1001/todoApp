<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">

          <div class="column is-6-tablet is-5-desktop is-4-widescreen is-12-mobile">

            <form action="" class="box">
              <message></message>
              <div class="field">
                <label for="email" class="label">Email</label>
                <div class="control has-icons-left ">
                  <input type="email" name="email"

                         v-model="email" placeholder="e.g. bobsmith@gmail.com"
                         class="input  is-medium"
                         required>
                  <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                </div>
              </div>
              <div class="field">
                <label for="password" class="label">Password</label>
                <div class="control has-icons-left is-large">
                  <input type="password" name="password" v-model="password"
                         placeholder="*******"
                         class="input  is-medium"
                         required>
                  <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
                </div>
              </div>
              <div class="field">
                <button type="button" class="button is-primary is-outlined is-fullwidth"
                        :class="{'is-loading':is_loading}"
                        @click="login">
                  Ingresar
                </button>

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

const user = new UserService()

export default {
  name: 'Login',
  components: { Message },
  data: () => ({
    email: 'miguel.cabrera@oohel.net',
    password: 'Pa55w0rd',
    is_loading: false
  }),
  mounted: function () {
    if (this.$store.getters.is_logged) {
      this.$router.push('/project')
    }
  },
  methods: {
    login: function () {
      if (this.email && this.password) {
        this.is_loading = true
        user.login(this.email, this.password).then(res => {
          if (res.status === 200) {
            console.log(res)
            this.$store.commit('login', res)
            this.$router.push('/project')
          } else {
            this.is_loading = false
          }
        }).catch(err => {
          console.log(err.response)
          this.$store.commit('setMessage', { is_visible: true, message: err.response.data.message })
          this.is_loading = false
        })
      } else {
        this.$store.commit('setMessage', { is_visible: true, message: 'Por favor ingrese su email y contraseña' })
      }
    }
  }

}
</script>

import Vuex from 'vuex'
import Vue from 'vue'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage
})

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    message: {
      is_visible: false,
      message: '',
      color: 'is-danger'
    },
    user: {},
    token: '',
    status: false

  },
  mutations: {
    setMessage (state, message) {
      Object.assign(state.message, message)
      setTimeout(() => {
        state.message.is_visible = false
      }, 3000)
    },
    hideMessage (state) {
      state.message.is_visible = false
    },
    login (state, response) {
      state.user = response.data.user_data
      state.token = response.data.token

      state.status = true
    },
    logout (state) {
      state.user = {}
      state.token = ''
      state.status = false
      state.message = {
        is_visible: false
      }
    }
  },
  getters: {
    message: state => state.message,
    is_logged: state => state.status,
    user: state => state.user,
    user_id: state => state.user.user_id,
    token: state => state.token
  }
})

export default store

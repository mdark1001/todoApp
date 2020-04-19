/*
* 31/03/20
*Miguel Cabrera R. <miguel.cabrera.app@gmail.com>
*
*/
import BASE from './BASE'

const axios = require('axios')

class UserService extends BASE {
  login (email, passwod) {
    return axios.post(`${this.base_url}/user/login`, {
      email: email,
      password: passwod,
      gethash: 1
    })
  }

  register (user) {
    return axios.post(`${this.base_url}/user`, user)
  }
}

export default UserService

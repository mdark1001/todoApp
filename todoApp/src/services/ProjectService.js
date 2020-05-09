/*
* 31/03/20
*Miguel Cabrera R. <miguel.cabrera.app@gmail.com>
*
*/
import BASE from './BASE'

const axios = require('axios')
const MESES=[
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
]


class ProjectServices extends BASE {
  getProjects (token) {
    console.log(`${this.base_url}`)
    return axios({
      method: 'GET',
      url: `${this.base_url}project`,
      headers:
        {
          Authorization: token
        },
      json: true
    })
  }

  create (data, token) {
    return axios(
      {
        method: 'POST',
        url: `${this.base_url}project`,
        data: data,
        headers:
          {
            Authorization: token
          },
        json: true

      })
  }
  getViewPriority(value){
    return value

  }

  formatterDate(value){
    var date = new Date(value);
    let mes =MESES[date.getMonth()]
    return `${date.getDate()} de ${mes} del ${date.getFullYear()}`
  }
}

export default ProjectServices

import axios from 'axios'

const MY_SERVER = "http://127.0.0.1:8000/login"

export function doLogin(cred) {
  return axios.post(MY_SERVER,cred)

}
